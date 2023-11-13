import { Controller, Get, Req, UseGuards } from '@nestjs/common';
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
    console.log('user.ctrl.Get/myself ::')
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

  @Get('me')
  get_myself () {
    return "i am mine<br><img src='https://upload.wikimedia.org/wikipedia/commons/2/2d/Dados_4_a_20_caras_trans.png'>"
  }

  //////////////////////////////////////////
  //              users/mine              //
  //////////////////////////////////////////

  @Get('mine')
  get_mine () {
    return "i am mine"
  }
}
