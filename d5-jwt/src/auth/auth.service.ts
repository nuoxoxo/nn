import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto'
// import * as dotenv from 'dotenv'
import * as argon from 'argon2'
import { Token } from './types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor (
    private prisma: PrismaService,
    private jwtservice: JwtService
  ) {
    // dotenv.config()
  }

  //////////////////////////////////////////
  //               Signup                 //
  //////////////////////////////////////////
  async local_signup(dto: AuthDto) : Promise<Token> {
    console.log("auth/local/signup :", {dto})
    // step : checker if user exists
    const usermatch = await this.prisma.user.findUnique({where: {mail: dto.mail}})
    if (usermatch) throw new ForbiddenException /*nestjs built-in 403*/ (
      'User exists', 'double dealer' // 2nd arg is "error", which is "Forbidden" by default
    )
    // step : register new user
    const hash: string = await argon.hash(dto.pass)
    const newcomer = await this.prisma.user.create({
      data: {
        mail: dto.mail,
        hash
      }
    })
    // step : if all ok, upd. refresh token
    const tokens = await this.sign_tokens(newcomer.id, newcomer.hash)
    await this.update_refresh_token(newcomer.id, tokens.refresh_token)
    console.log("auth/local/signup :", {tokens})
    return tokens
  }

  //////////////////////////////////////////
  //               Signin                 //
  //////////////////////////////////////////
  async local_signin(dto: AuthDto) : Promise<Token> {
    console.log("auth/local/signin :", {dto})
    // step : checker if user exists
    const usermatch = await this.prisma.user.findUnique({where: {mail: dto.mail}})
    if (!usermatch) throw new ForbiddenException /*403*/ (
      'No such user', 'Access Denied Orz'
    )
    // step : if user ok, check password
    const passmatch = await argon.verify(usermatch.hash, dto.pass)
    if (!passmatch) throw new ForbiddenException (
      'Wrong password', 'Do better next time'
    )
    // step : if all ok, upd. refresh token
    const tokens = await this.sign_tokens(usermatch.id, usermatch.hash)
    await this.update_refresh_token(usermatch.id, tokens.refresh_token)
    console.log("auth/local/signin :", {tokens})
    return tokens
  }


  //////////////////////////////////////////
  //              refresh                 //
  //////////////////////////////////////////
  refresh() {
    console.log("auth/refresh :")
  }


  //////////////////////////////////////////
  //              Logout                  //
  //////////////////////////////////////////
  logout() {
    console.log("auth/logout :")
  }


  //////////////////////////////////////////
  // Utility                              //
  //    sign_tokens                       //
  //    update_refresh_token              //
  //////////////////////////////////////////
  sign_tokens = async (
    uid: number,
    mail: string
  ) : Promise<Token> => {
    const [at, rt] = await Promise.all([
      this.jwtservice.signAsync({
        sub: uid,
        mail
      }, {
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
        expiresIn: 60 * 10 // seconds
      }),
      this.jwtservice.signAsync({
        sub: uid,
        mail
      }, {
        secret: process.env.JWT_REFRESH_TOKEN_SECRET,
        expiresIn: 60 * 20
      })
    ])
    return {
      access_token: at,
      refresh_token: rt,
    }
  }

  async update_refresh_token (
    uid: number,
    refresh_token: string
  ) {
    const hash = await argon.hash( refresh_token )
    await this.prisma.user.update({
      where: {id: uid},
      data: {hashedRT: hash}
    })
  }
}
