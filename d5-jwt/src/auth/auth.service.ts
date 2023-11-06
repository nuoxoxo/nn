import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto'
import * as argon from 'argon2'
import { Token } from './types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor (
    private prisma: PrismaService,
    private jwtservice: JwtService
  ) {
  }

  //////////////////////////////////////////
  //               Signup                 //
  //////////////////////////////////////////
  local_signup = async (dto: AuthDto) : Promise<Token> => {
    console.log("auth/local/signup :", {dto})
    // step : checker if user exists
    const usermatch = await this.prisma.user.findUnique({where: {mail: dto.mail}})
    if (usermatch) throw new ForbiddenException /*nestjs 403*/ (
      'User exists', 'doppelgänger'
    )
    // step : register new user
    const hash: string = await argon.hash(dto.pass)
    const newcomer = await this.prisma.user.create({
      data: {
        mail: dto.mail,
        hash
      }
    })
    // step : if all ok, upd. set refresh token
    const tokens = await this.get_tokens(newcomer.id, newcomer.hash)
    await this.set_refresh_token(newcomer.id, tokens.refresh_token)
    console.log("auth/local/signup :", {tokens})
    return tokens
  }

  //////////////////////////////////////////
  //               Signin                 //
  //////////////////////////////////////////
  local_signin = async (dto: AuthDto) : Promise<Token> => {
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
    const tokens = await this.get_tokens(usermatch.id, usermatch.hash)
    await this.set_refresh_token(usermatch.id, tokens.refresh_token)
    console.log("auth/local/signin :", {tokens})
    return tokens
  }


  //////////////////////////////////////////
  //              refresh                 //
  //////////////////////////////////////////
  refresh(uid: number, rtk: string) {
    console.log("auth/refresh :")
  }


  //////////////////////////////////////////
  //              Logout                  //
  //////////////////////////////////////////
  logout = async (uid:number) : Promise<void> => {

    console.log("auth/logout :", {uid})
  
    // step : set null iff token not null (need insight)
    await this.prisma.user.updateMany({
      where: {id: uid, hashedRT: { not: null }},
      data: { hashedRT: null }
    })
  }


  //////////////////////////////////////////
  // Utility                              //
  //    get_tokens                        //
  //    set_refresh_token                 //
  //////////////////////////////////////////
  get_tokens = async (
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

  set_refresh_token = async (
    uid: number,
    refresh_token: string
  ) => {
    const hash = await argon.hash( refresh_token )
    await this.prisma.user.update({
      where: {id: uid},
      data: {hashedRT: hash}
    })
  }
}
