import { Module } from "@nestjs/common"; // autogen
import { AuthController } from "./auth.controller"
import { AuthService } from "./auth.service"
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from "./strategy";
// import { PrismaModule } from "src/prisma/prisma.module";
// 👆 : no import once @Global in prisma.mod 

@Module ({

  imports: [ 
    JwtModule.register({}),
    // PrismaModule // no need @Global is set in prisma.mod 
  ],
  controllers: [AuthController],
  /*
  Controllers handle incoming HTTP requests and define the route handlers
  */

  providers: [AuthService, JwtStrategy],
  /*
  Providers handle business logic, services, and data access
  */

})

export class AuthModule {}
