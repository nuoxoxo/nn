import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  /*
  Entry point for a NestJS application.
  */

  const app = await NestFactory.create(AppModule);

  await app.listen(10086);
  /*
  start listening for incoming HTTP requests on port 10086
  */

  console.log(AppModule)

}

bootstrap();
