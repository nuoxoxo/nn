import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, /*let's try this*//*RefreshTokenDto*/ } from './dto';
import { Token } from './types';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express'
import { ATGuard, RTGuard } from 'src/common/guards';

@Controller('auth')
export class AuthController {

  /*
  4 routes: (all under /auth)
    - local/signup
    - local/signin
    - refresh
    - logout
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

  // @UseGuards(AuthGuard('Jwt-Refresh'/*'jwt'*/)) // BUG: 'Jwt-Refresh' to guard ?
  @UseGuards( RTGuard )
  @Post('/refresh')
  @HttpCode (HttpStatus.OK) // 200
  // way 2 : use DTO instead of Express Request . can i do this?
  // refresh (@Body() dto: RefreshTokenDto)
  // way 1 : param uses express request
  refresh (@Req() req: Request) {
    const [uid, rtk] = [
      req.user['sub'],
      req.user['refresh_token']
    ]
    return this.authService.refresh(uid, rtk)
  }

  // @UseGuards(AuthGuard('Jwt'/*'jwt'*/))
  @UseGuards( ATGuard )
  @Post('/logout')
  @HttpCode (HttpStatus.OK) // 200
  logout (@Req() req: Request) : Promise<boolean> {
    const uid = req.user['sub']
    console.log("auth/logout @ controller :", {uid})
    return this.authService.logout( uid )
  }

}
