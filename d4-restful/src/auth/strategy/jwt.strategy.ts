import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy (
  Strategy,
  'Jwt', // will be identified by the AuthGuard 
) {
  constructor() {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    });
  }
}