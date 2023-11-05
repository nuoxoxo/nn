import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  // impo
  controllers: [AuthController],
  providers: [AuthService, AtStrategy, RtStrategy],
})

export class AuthModule {}
