import { Injectable } from "@nestjs/common";

@Injectable ({})
export class AuthService {

  signin () {
    return { message: "@signin service: Hello" }
    // { return 'Signed in.'}
  }

  signup () {
    return { message: "@signup service: Hello" }
    // { return 'Signed up.'}
  }
}