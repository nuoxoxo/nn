import { AuthGuard } from "@nestjs/passport";

export class ATGuard extends AuthGuard ('Jwt') {
  constructor () {
    super()
  }
}