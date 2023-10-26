import { Injectable } from "@nestjs/common";

@Injectable ({})
export class AuthService {

  signin () {
    return { message: "@signin service: Hello" }
  }

  signup () {
    return { message: "@signup service: Hello" }
  }
}