import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {

  // GET /users : left blank to catch any incoming request
  /*
  @Get()
  */

  // GET /users/me . GUARDED
  @UseGuards ( // route will be guarded by this strategy set
    AuthGuard('Jwt'),
  )
  @Get('me')
  get_me () {
    return 'user info'
  }

  // GET /users/myself . UnGuarded
  @Get('myself')
  get_myself () {
    return 'i me mine'
  }

  // GET /users/mine . UnGuarded
  @Get('mine')
  get_mine () {
    return 'i am mine'
  }
}
