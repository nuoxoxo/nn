import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

// @Injectable
export class AtStrategy extends PassportStrategy ( Strategy, 'Jwt') {
  constructor () {
    super({
      // 1st field : how we get this token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_ACCESS_TOKEN_SECRET
    })
  }

  validate (payload: any) {
    console.log('at.strat validate payload :', payload)
    return payload
  }
}
