import { Injectable } from "@nestjs/common";
// import { User, Bookmark } from '@prisma/client';

@Injectable ({})
export class AuthService {

  signin () {
    return { message: "@signin service: Hello" }
  }

  signup () {
    return { message: "@signup service: Hello" }
  }
}