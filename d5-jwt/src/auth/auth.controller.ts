import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  /*
  4 routes:
    - local/signup
    - local/signin
    - auth/refresh
    - auth/logout
  */

  constructor ( private authService: AuthService ) {}

  @Post('/local/signup')
  local_signup () { this.authService.local_signup() }

  @Post('/local/signin')
  local_signin () { this.authService.local_signin() }

  @Post('/refresh')
  refresh () { this.authService.refresh() }

  @Post('/logout')
  logout () { this.authService.logout() }



}
