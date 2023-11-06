import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Token } from './types';

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
  @HttpCode (HttpStatus.CREATED) // 201
  async local_signup (@Body() dto: AuthDto) : Promise<Token> {
    return this.authService.local_signup(dto)
  }

  @Post('/local/signin')
  @HttpCode (HttpStatus.OK) // 200
  async local_signin (@Body() dto: AuthDto) : Promise<Token> {
    return this.authService.local_signin(dto)
  }

  @Post('/refresh')
  @HttpCode (HttpStatus.OK) // 200
  refresh () { return this.authService.refresh() }

  @Post('/logout')
  @HttpCode (HttpStatus.OK) // 200
  logout (uid: number) : Promise<void> {
    return this.authService.logout( uid )
  }

}
