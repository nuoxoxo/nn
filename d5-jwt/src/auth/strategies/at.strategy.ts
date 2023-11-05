import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class AtStrategy extends PassportStrategy ( Strategy, 'Jwt') {
  constructor () {
    super({
      // 1st field : how we get this token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOfKey: 'this is an ACCESS token secret'
    })
  }

  validate (payload: any) { return payload }
}
