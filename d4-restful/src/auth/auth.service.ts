import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'

@Injectable (/*{}*/)
export class AuthService {

  constructor (private prisma : PrismaService) {}

  async signup (dto: AuthDto) {
    // async : because Prisma is called asynchronously
    console.log("from AuthService.signup ::", {dto})

    //  generate hash of the password
    const hash: string = await argon.hash( dto.pass )

    //  save new user to DB
    const user = await this.prisma.user.create({
      data: {
        mail: dto.mail,
        hash,
      },
    })

    //  return saved user
    return { user, message: "@signup service: Hello" }
  }

  signin (){
    return { message: "@signin service: Hello" }
  }
}