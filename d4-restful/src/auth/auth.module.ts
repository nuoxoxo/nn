import { Module } from "@nestjs/common"; // autogen
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
// import { PrismaModule } from "src/prisma/prisma.module";
// 👆 : no import once @Global in prisma.mod 

@Module ({

  // imports: [PrismaModule], // no import once @Global in prisma.mod 
  controllers: [AuthController],
  providers: [AuthService],

})

export class AuthModule {}
