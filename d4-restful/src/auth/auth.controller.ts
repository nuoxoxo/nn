import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller ('auth')
/*
'auth' is the "global prefix route"

` @Controller ('auth') `
marks the AuthController class as a controller 
with a base route path of 'auth' (a "global prefix route").

It sets the base path for all the routes defined within this controller 
*/
export class AuthController {

  constructor (private authService: AuthService)
  {}
  /*
  Constructor takes an instance of AuthService class as a param/
  The AuthService class should have been decorated as `Injectable`
  */

  // request : POST to /auth/signup
  @Post('signup')
  signup (
    @Body () dto: AuthDto
    /*
    ` @Body() `
    a decorator that instructs NestJS to parse the request body 
    and bind it to the parameter 'dto' of type 'AuthDto'
    */
  ) {

    return this.authService.signup()
  }
  /*
  ` @Post('signup') `
  marks the signup method to handle HTTP POST requests to the '/auth' route.
  It specifies the '/auth/signup' path for this specific route
  */

  @Post('signin')
  signin () {
    return this.authService.signin()
  }
}