import { Module } from "@nestjs/common"; // autogen
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module ({

  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
