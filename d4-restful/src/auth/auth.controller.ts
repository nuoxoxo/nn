import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller ('auth')
// 'auth' is the "global prefix route" 
export class AuthController {

  constructor (private authService: AuthService)
  {}

  // request : POST /auth/signup
  @Post('signup')
  signup (
    @Body () dto: AuthDto
  ) {

    return this.authService.signup()
  }

  @Post('signin')
  signin () {
    return this.authService.signin()
  }
}