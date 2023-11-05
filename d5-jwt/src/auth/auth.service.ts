import { Injectable } from '@nestjs/common';
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

  //////////////////////////////////////////
  //               Signup                 //
  //////////////////////////////////////////
  async local_signup(dto: AuthDto) : Promise<Token> {
    console.log("/local/signup route reached :", {dto})
    const hash: string = await argon.hash(dto.pass)
    const newcomer = await this.prisma.user.create({
      data: {
        mail: dto.mail,
        hash
      }
    })
    const tokens = this.sign_tokens(
      newcomer.id,
      newcomer.hash
    )
    return tokens
    // return {dto, newcomer} // i still want it to return more stuff
  }


  //////////////////////////////////////////
  //               Signin                 //
  //////////////////////////////////////////
  local_signin() {
    console.log("/local/signin route reached :")
  }


  //////////////////////////////////////////
  //              refresh                 //
  //////////////////////////////////////////
  refresh() {
    console.log("/refresh route reached :")
  }


  //////////////////////////////////////////
  //              Logout                  //
  //////////////////////////////////////////
  logout() {
    console.log("/logout route reached :")
  }
}
