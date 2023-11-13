import { AuthGuard } from "@nestjs/passport";

export class JwtGuard extends AuthGuard ('Jwt') {
  constructor() {
    super()
  }
}