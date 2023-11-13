import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy (
  Strategy,
  'Jwt', // will be identified by the AuthGuard 
) {
  constructor(
    private prisma: PrismaService
  ) {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    });
  }

  // TODO : validate func should be handmade

  // validate(payload: any) {
  async validate(
    payload: {
      sub: number,
      mail: string
    }
  ) {
    console.log('jwt.strat.validate ::')
    console.log({payload})
    console.log('whatever passed here will be appended to the user key of the request object (at user.ctrl)\n')

    const user = await this.prisma.user.findUnique({where: {id: payload.sub}})

    delete user.hash
    return user
  }

}
