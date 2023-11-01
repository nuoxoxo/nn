import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  /*
  Entry point for a NestJS application.
  */

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes( new ValidationPipe () )

  await app.listen(10086);
  /*
  start listening for incoming HTTP requests on port 10086
  */

  console.log(AppModule, typeof AppModule)

}

bootstrap();
