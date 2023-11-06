import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";

type JwtRefreshTokenStrategyPayload = { // TODO
  sub: number,
  mail: string,
  iat: number,
  exp: number
} // TODO

// @Injectable
export class RtStrategy extends PassportStrategy ( Strategy, 'Jwt-Refresh') {
  constructor () {
    super({
      // 1st field : how we get this token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_REFRESH_TOKEN_SECRET,
      passReqToCallback: true, // <--- pay attention to this 
    })
  }

  validate (
    req: Request,
    // payload: any
    payload: JwtRefreshTokenStrategyPayload
  ) {
    const rt = req.get('authorization')
                  .replace('Bearer', '')
                  .trim()
    const res = {... payload, rt}
    console.log('Refresh token strat validate payload :', payload)
    return res
  }
}
