import { Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller ('auth')
// 'auth' is the "global prefix route" WTM.
export class AuthController {

  constructor (private authService: AuthService)
  {}

  // request : POST /auth/signup
  @Post('signup')
  signup (
    @Req() req: Request
  ) {

    console.log(req, req.headers)
    return this.authService.signup()
  }
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