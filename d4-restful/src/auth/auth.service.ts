import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";
// import { ConfigService } from "@nestjs/config";
import * as dotenv from 'dotenv'

@Injectable (/*{}*/)
export class AuthService {

  constructor (
    private prisma : PrismaService,
    private jwt : JwtService,
    // private config: ConfigService
  ) {
    dotenv.config()
  }


  //////////////////////////////////////////
  //               signup                 //
  //////////////////////////////////////////

  async signup (dto: AuthDto) {
    // async : because Prisma is called asynchronously
    console.log("AuthService.signup ::", {dto})

    //  generate hash of the password
    const hash: string = await argon.hash( dto.pass )

    //  save new user to DB
    try {
      const user = await this.prisma.user.create({
        data: {
          mail: dto.mail,
          hash,
        },
      })

      delete  user.hash


      //  return saved user

      const token_data: Promise<{access_token: string}> = this.signtoken(user.id, user.mail);

      //  way 1
      // return (await token_data).access_token

      console.log(`AuthService.signin ::\n- token -\n${(await token_data).access_token}`)

      //  way 2 - print more interesting stuff
      return {
        user,
        message: "@signin service: signed up",
        access_token: (await token_data).access_token
      }
    } catch ( err ) {

      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002')
        // error code P2002 represents `unique validation failure` (prisma)
          throw new ForbiddenException(
            'Credential taken', 
            'Lol double dealer here' // 2nd arg is "error": "Forbidden" by default
          )
          // ForbiddenException - NestJS built-in exception for 403
      }
      throw err
    }
  }

  //////////////////////////////////////////
  //               signin                 //
  //////////////////////////////////////////

  async signin (dto: AuthDto) {

    console.log("AuthService.signin ::", {dto})

    // find user by mail, bc. mail is unique 
    const user = await this.prisma.user.findUnique({
      where: {
        mail: dto.mail,
      },
    })

    // throw excp if mail !exist
    if ( ! user) {
      throw new ForbiddenException(
        'Credential not found',
        'Orz no user found' // 2nd arg is "error": "Forbidden" by default
      )
    }

    // eval the pass
    const pwdMatch = await argon.verify(user.hash, dto.pass)

    // throw excp on incorrect pass
    if ( ! pwdMatch) {
      throw new ForbiddenException(
        'Credential incorrect',
        'Omg you got that wrong' // 2nd arg is "error": "Forbidden" by default
      )
    }

    // send back the user 
    delete user.hash

    const token_data: Promise<{access_token: string}> = this.signtoken(user.id, user.mail);

    //  way 1
    // return (await token_data).access_token

    console.log(`AuthService.signin ::\n- token -\n${(await token_data).access_token}`)

    //  way 2 - print more interesting stuff
    return {
      user,
      message: "@signin service: signed in",
      access_token: (await token_data).access_token
    }
  }

  //////////////////////////////////////////
  //              signtoken               //
  //////////////////////////////////////////

  async signtoken (
    uid: number,
    mail: string
  ) : Promise<{access_token: string}> {
    const payload = {
      sub: uid,
      mail
    }

    const token = await this.jwt.signAsync(payload,{
      expiresIn: '5m',
      secret: process.env.JWT_SECRET,
      // secret: this.config.get('JWT_SECRET')
    })

    return { access_token: token }

  }

}