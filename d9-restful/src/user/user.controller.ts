import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {

  // GET /users : left blank to catch any incoming request
  /*
  @Get()
  */

  @UseGuards ( // route will be guarded by this strategy set
    AuthGuard('Jwt'),
  )
  @Get('myself')
  get_me (@Req() req: Request) {
    console.log({user: req['user']}, "@ user.ctrl.Get/myself\n")
    return "I am the center<br><img src='https://upload.wikimedia.org/wikipedia/commons/2/2d/Dados_4_a_20_caras_trans.png'>"
  }

  // UnGuarded
  @Get('me')
  get_myself () {
    return "i am mine"
  }

  // UnGuarded
  @Get('mine')
  get_mine () {
    return "i am mine"
  }
}
