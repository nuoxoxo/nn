import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable (/*{}*/)
export class AuthService {

  constructor (private prisma : PrismaService) {}

  signin (){
    return { message: "@signin service: Hello" }
  }

  signup (dto: AuthDto){
    console.log("from AuthService.signup ::", {dto})
    return { message: "@signup service: Hello" }
  }
}