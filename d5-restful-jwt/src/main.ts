import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  /*
  Entry point for a NestJS application.
  */

  dotenv.config() 

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe ({
      whitelist: true
      /*
      whitelist will filter properties that do not have any decorators
      */
    })
  )

  await app.listen(10086);
  /*
  start listening for incoming HTTP requests on port 10086
  */

  console.log(AppModule, typeof AppModule)

}

bootstrap();
