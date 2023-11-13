import { Controller, Get, HttpCode, HttpStatus, Patch, /*Req,*/ UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUserDCR } from 'src/auth/decorators/getuser.decorator';
import { JwtGuard } from 'src/auth/guard';
// import { AuthGuard } from '@nestjs/passport'; // no longer used

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {

  // GET /users : left blank to catch any incoming request
  /*
  @Get()
  */

  //////////////////////////////////////////
  //             users/myself             //
  //////////////////////////////////////////

  // Before using a custom guard) : JwtGuard
  /* @UseGuards (AuthGuard('Jwt')) */
  @Get('myself')
  // Before using a custom decorator : GetUserDCR
  /* get_me (@Req() req: Request) */
  get_me (@GetUserDCR() user: User ){
    console.log('user.ctrl.Get/myself ::', {user})
    // before adding custom decorator : GetUserDCR
    /*
    console.log({user: req['user']})
    return req['user']
    */
    // added @GetUserDCR custom decorator
    return user
  }

  //////////////////////////////////////////
  //               users/me               //
  //////////////////////////////////////////

  @HttpCode(HttpStatus.I_AM_A_TEAPOT)
  @Get('me')
  get_myself () {
    return "<img src='https://i.imgur.com/FgB52xe.jpg'><br>i am mine"
  }

  //////////////////////////////////////////
  //              users/mine              //
  //////////////////////////////////////////

  @Get('mine')
  get_mine () {
    return "<img src='https://i.imgur.com/2YsOTfy.jpg'><br>i me mine"
  }

  //////////////////////////////////////////
  //              users/mail              //
  //////////////////////////////////////////

  @HttpCode(HttpStatus.FOUND) // 302 Found to replace 200 Ok
  @Get('mail')
  get_hash (
    @GetUserDCR() user: User,
    @GetUserDCR('mail') mail: string
  ) {
    console.log('user.ctrl.Get/mine ::', {mail})
    return "<img src='https://i.imgur.com/fBf6iUi.jpg'/>"
  }

  @Patch()
  edit_user() {
    // empty
  }
}
