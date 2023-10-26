import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller ('auth')
// 'auth' is the "global prefix route" WTM.
export class AuthController {

  constructor (private authService: AuthService)
  {}

  // request : POST /auth/signup
  @Post('signup')
  signup ()
  { return this.authService.signup() }
  // @Draft
  // { return { message: "@signup: Hello" } }
  // { return 'Signed up.'}

  // request : POST /auth/signin 
  @Post('signin')
  signin ()
  { return this.authService.signin() }
  // @Draft
  // { return { message: "@signin: Hello" } }
  // { return 'Signed in.' }


  // @Notes
  // if no private keyword:
  /*
  authService: AuthService
  constructor ( authService: AuthService) {
    this.authService = authService
  }
  */
}