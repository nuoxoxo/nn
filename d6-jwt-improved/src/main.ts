import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import { ValidationPipe } from '@nestjs/common';
import { ATGuard } from './common/guards';

dotenv.config()

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe)

  const reflector = new Reflector()
  app.useGlobalGuards(new ATGuard( reflector ))
  await app.listen(process.env.LISTEN_PORT)
}

bootstrap();
