import { AuthGuard } from "@nestjs/passport";

export class RtGuard extends AuthGuard ('Jwt-Refresh') {
  constructor () {
    super()
  }
}