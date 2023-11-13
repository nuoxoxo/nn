import { Controller, Get, Req, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {

  // GET /users : left blank to catch any incoming request
  /*
  @Get()
  */

  // @UseGuards (AuthGuard('Jwt')) // Now using a custom guard) : below
  @UseGuards(JwtGuard)
  @Get('myself')
  get_me (@Req() req: Request) {
    console.log('user.ctrl.Get/myself ::')
    console.log({user: req['user']})
    return req['user']
    // return req.user // doesn't work don't know why
    // return 'I am the center'
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
