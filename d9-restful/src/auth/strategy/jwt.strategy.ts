import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy (
  Strategy,
  'Jwt', // will be identified by the AuthGuard 
) {
  constructor(prisma: PrismaService) {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    });
  }

  // TODO : validate func should be handmade

  validate(payload: any) {
    console.log({payload}, '@ jwt.strat.validate')
    console.log('whatever passed here will be set as value of the user key of the request object (at user.ctrl)\n')
    return payload
  }

}
