import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  // getHello(): string {
  //   return 'Hello World!';
  // }

  googleLogin (req) {
    if ( ! req.user)
      return 'no use(r)'
    return {
      messgage: 'user info from ggl',
      user: req.user
    }
  }

  hello () { return 'Hello' }

}
