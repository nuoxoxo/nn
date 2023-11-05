import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

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
  local_signup (
    @Body()
    dto: AuthDto
  ) { this.authService.local_signup(dto) }

  @Post('/local/signin')
  local_signin () { this.authService.local_signin() }

  @Post('/refresh')
  refresh () { this.authService.refresh() }

  @Post('/logout')
  logout () { this.authService.logout() }



}
