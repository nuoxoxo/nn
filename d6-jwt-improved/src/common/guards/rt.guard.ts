import { AuthGuard } from "@nestjs/passport";

export class RTGuard extends AuthGuard ('Jwt-Refresh') {
  constructor () {
    super()
  }
}