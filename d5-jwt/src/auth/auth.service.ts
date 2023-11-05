import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2'
import { Token } from './types';

@Injectable()
export class AuthService {

  constructor ( private prisma: PrismaService ) {}

  //////////////////////////////////////////
  //               Signup                 //
  //////////////////////////////////////////
  async local_signup(dto: AuthDto) : Promise<Token> {
    console.log("/local/signup route reached :", {dto})
    const hash: string = await argon.hash(dto.pass)
    const newcomer = this.prisma.user.create({
      data: {
        mail: dto.mail,
        hash
      }
    })
    return {dto, newcomer}
  }

  //////////////////////////////////////////
  //               Signin                 //
  //////////////////////////////////////////
  local_signin() {
    console.log("/local/signin route reached :")
  }

  //////////////////////////////////////////
  //              refresh                 //
  //////////////////////////////////////////
  refresh() {
    console.log("/refresh route reached :")
  }

  //////////////////////////////////////////
  //              Logout                  //
  //////////////////////////////////////////
  logout() {
    console.log("/logout route reached :")
  }
}
