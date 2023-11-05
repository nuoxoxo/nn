import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {

  constructor ( private prisma: PrismaService ) {}

  local_signup(dto: AuthDto) {
    const new_user = this.prisma.user.create({
      data: {
        mail: dto.mail,
        pass
      }
    })
  }
  local_signin() {}
  refresh() {}
  logout() {}
}
