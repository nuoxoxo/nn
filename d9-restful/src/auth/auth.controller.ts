import { Body, Controller, HttpCode, HttpStatus, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller ('auth') // see noteS - bottom
export class AuthController {

  constructor (private authService: AuthService) {}
  /*
  Constructor takes an instance of AuthService class as a param/
  The AuthService class should have been decorated as `Injectable`
  */

  //////////////////////////////////////////
  //             auth/signup              //
  //////////////////////////////////////////

  @Post('signup') // see notes
  signup (@Body() dto: AuthDto) {
    console.log("auth.ctrl.signup ::", {dto})
    return this.authService.signup(dto) // added dto sas param . timestamp : 1:01:50
  }
  /*
  ` @Post('signup') `
  marks the signup method to handle HTTP POST requests to the '/auth' route.
  It specifies the '/auth/signup' path for this specific route

  A client (usually a web browser or an app) sends
  a POST request to a server.
  */
  /*
  ` @Body() `
  a decorator that instructs NestJS to parse the request body 
  and bind it to the parameter 'dto' of type 'AuthDto'
  */

  //////////////////////////////////////////
  //             auth/signin              //
  //////////////////////////////////////////

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin (@Body() dto: AuthDto
  ) {
    console.log("auth.ctrl.signin ::", {dto})
    return this.authService.signin(dto)
  }
}
/*
'auth' is the "global prefix route"

` @Controller ('auth') `
marks the AuthController class as a controller 
with a base route path of 'auth' (a "global prefix route").

It sets the base path for all the routes defined within this controller 
*/
