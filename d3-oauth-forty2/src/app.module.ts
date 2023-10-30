import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// import { GoogleStrategy } from './google.strategy';
import { FortytwoStrategy } from './google.strategy';

@Module({
  imports: [],
  controllers: [AppController],
  // providers: [AppService, GoogleStrategy],
  providers: [AppService, FortytwoStrategy],
})
export class AppModule {}
