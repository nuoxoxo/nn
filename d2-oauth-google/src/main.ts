import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {

  dotenv.config() // load env vars from .env

  const app = await NestFactory.create(AppModule);
  await app.listen(3333);
}
bootstrap();
