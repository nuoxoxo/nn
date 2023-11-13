import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUserDCR } from 'src/auth/decorators/getuser.decorator';
import { JwtGuard } from 'src/auth/guard';
// import { AuthGuard } from '@nestjs/passport'; // no longer used

@Controller('users')
export class UserController {

  // GET /users : left blank to catch any incoming request
  /*
  @Get()
  */

  // @UseGuards (AuthGuard('Jwt')) // Now using a custom guard) : JwtGuard
  @UseGuards(JwtGuard)
  @Get('myself')
  // get_me (@Req() req: Request) // Now using a custom decorator : GetUserDCR
  get_me (@GetUserDCR() user: User ){

    console.log('user.ctrl.Get/myself ::')

    // added @GetUserDCR custom decorator
    return user

    // before adding custom decorator : GetUserDCR
    /*
    console.log({user: req['user']})
    return req['user']
    */
  }

  // UnGuarded
  @Get('me')
  get_myself () {
    return "i am mine<br><img src='https://upload.wikimedia.org/wikipedia/commons/2/2d/Dados_4_a_20_caras_trans.png'>"
  }

  // UnGuarded
  @Get('mine')
  get_mine () {
    return "i am mine"
  }
}
