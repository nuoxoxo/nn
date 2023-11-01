import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable (/*{}*/)
export class AuthService {

  constructor (private prisma : PrismaService) {}

  async signup (dto: AuthDto) {
    // async : because Prisma is called asynchronously
    console.log("from AuthService.signup ::", {dto})

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
      return { user, message: "@signup service: Hello" }
    } catch ( err ) {

      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002')
        // error code P2002 represents `unique validation failure` (prisma)
          throw new ForbiddenException(
            'Credential taken', 
            'Lol' // 2nd arg is "error": "Forbidden" by default
          )
          // ForbiddenException - NestJS built-in exception for 403
      }
      throw err
    }
  }

  signin (){

    // find user by mail, bc. mail is unique 
    //  throw excp on !exist

    // eval the pass
    //  throw excp on incorrect pass

    // return user 

    return { message: "@signin service: Hello" }
  }
}