import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import { ValidationPipe } from '@nestjs/common';

dotenv.config()

async function bootstrap() {
  console.log(process.env)
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe)
  await app.listen(process.env.LISTEN_PORT)
}

bootstrap();
