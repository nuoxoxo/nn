import { Controller, Get,/*added:*/ UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // Use google
  /*
  @Get()
  @UseGuards( AuthGuard('google'))
  async googleAuth ( @Req() req) {}
  */

  // Use 42

  @Get()
  @UseGuards( AuthGuard('fortytwo'))
  async fortytwoAuth ( @Req() req) {}

  // Use google
  /*
  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect( @Req() req ) {
    return this.appService.googleLogin( req )
  }
  */

  // Use 42
  @Get('auth/42/callback')
  @UseGuards(AuthGuard('fortytwo'))
  fortytwoAuthRedirect( @Req() req ) {
    return this.appService.fortytwoLogin( req )
  }
}
