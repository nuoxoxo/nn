import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller ('auth')
// 'auth' is the "global prefix route" WTM.
export class AuthController {

  constructor (private authService: AuthService)
  {}

  @Post('signup') // request : POST /auth/signup
  signup ()
  { return 'Signed up.'}

  @Post('signin') // request : POST /auth/signin 
  signin ()
  { return 'Signed in.' }

  // if no private keyword:
  /*
  authService: AuthService
  constructor ( authService: AuthService) {
    this.authService = authService
  }
  */
}