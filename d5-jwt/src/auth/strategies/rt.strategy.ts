import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtAccessTokenStrategyPayload } from '.'

// BUG Found
/*
type JwtRefreshTokenStrategyPayload = {
  sub: number,
  mail: string,
  iat: number,
  exp: number,
  /// BUG :: missing field `refresh_token`
}
*/

// BUG FIXED
export type JwtRefreshTokenStrategyPayload = JwtAccessTokenStrategyPayload & {
  refresh_token: string
}

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
    const /*rt*/refresh_token = req.get('authorization')
                  .replace('Bearer', '')
                  .trim()

    // BUG FIX : `refresh_token` is a class property, should not be misidentified

    const res = {... payload, /*rt*/refresh_token}
    console.log('Refresh token strat validate payload :', payload)
    return res
  }
}
