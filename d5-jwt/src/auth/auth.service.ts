import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

  constructor ( private prisma: PrismaService ) {}

  local_signup(dto: AuthService) {
    const new_user = this.prisma.user.create({
      data: {
        mail: dto.mail
      }
    })
  }
  local_signin() {}
  refresh() {}
  logout() {}
}
