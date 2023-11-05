import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";

// @Injectable
export class RtStrategy extends PassportStrategy ( Strategy, 'Jwt-refresh') {
  constructor () {
    super({
      // 1st field : how we get this token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOfKey: 'this is a REFRESH token secret',
      passReqToCallback: true, // <--- pay attention to this 
    })
  }

  validate (
    req: Request,
    payload: any
  ) {
    const rt = req.get('authorization')
                  .replace('Bearer', '')
                  .trim()
    const res = {... payload, rt}
    return res
  }
}
