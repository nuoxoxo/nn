import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2'

@Injectable()
export class AuthService {

  constructor ( private prisma: PrismaService ) {}

  async local_signup(dto: AuthDto) {

    
    console.log("local/signup route reached :", {dto})

    const hash: string = await argon.hash(dto.pass)
    const new_user = this.prisma.user.create({
      data: {
        mail: dto.mail,
        hash
      }
    })
  }
  local_signin() {}
  refresh() {}
  logout() {}
}
