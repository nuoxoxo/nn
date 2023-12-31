import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Token } from './types';
import { RTGuard } from 'src/common/guards';
import {
  Get_current_user_id, 
  Get_current_user, 
  Public
} from 'src/common/decorators';

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

  @Public()
  @Post('/local/signup')
  @HttpCode (HttpStatus.CREATED) // 201
  async local_signup (@Body() dto: AuthDto) : Promise<Token> {
    return this.authService.local_signup(dto)
  }

  @Public()
  @Post('/local/signin')
  @HttpCode (HttpStatus.OK) // 200
  async local_signin (@Body() dto: AuthDto) : Promise<Token> {
    return this.authService.local_signin(dto)
  }

  @Public() // improved : bypass the now global ATGuard
  // guard way 1
  // @UseGuards(AuthGuard('Jwt-Refresh'))
  // guard way 2 : Improved w/ custom Guard
  @UseGuards( RTGuard )
  @Post('/refresh')
  @HttpCode (HttpStatus.OK) // 200
  // Decorator way 1 : param uses express request
  // refresh (@Req() req: Request) {
  // Decorator way 2 : 
  refresh (
    @Get_current_user_id() uid: number,
    @Get_current_user('refresh_token') rtk: string,
  ) {

    // way 2 : Improved w/ custom Decorator
    return this.authService.refresh(uid, rtk)

    // way 1
    // const [uid, rtk] = [req.user['sub'], req.user['refresh_token']]

  }

  // guard way 1
  // @UseGuards(AuthGuard('Jwt'))
  // guard way 2 : Improved w/ custom Guard 
  // @UseGuards( ATGuard )
  // guard way 3 : use global Guard
  @Post('/logout')
  @HttpCode (HttpStatus.OK) // 200
  // Decorator way 1 : param uses express request
  // logout (@Req() req: Request) : Promise<boolean> {
  // Decorator way 2 : Improved w/ custom decorator
  logout (@Get_current_user_id() uid: number) : Promise<boolean> {
    console.log("auth/logout @ controller :", {uid})
    // const uid = req.user['sub'] // cmt out w/ custom decorator
    return this.authService.logout( uid )
  }

}
