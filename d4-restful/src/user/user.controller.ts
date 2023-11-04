import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {

  // GET /users : left blank to catch any incoming request
  /*
  @Get()
  */

  // GET /users/me
  @Get('me')
  get_me () {
    return 'user info'
  }

  // GET /users/myself
  @Get('myself')
  get_myself () {
    return 'i me mine'
  }

  // GET /users/mine
  @Get('mine')
  get_mine () {
    return 'i am mine'
  }
}
