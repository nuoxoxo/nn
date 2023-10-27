import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*
  app.enableCors({
    origin: '*', // 'http:// _ .org'
    methods: 'GET,CREATE,READ,HEAD,UPDATE,PUT,PATCH,POST,DELETE',
    credentials: true, // (ie. cookies etc.)
  })
  */

  await app.listen(7777);
}
bootstrap();
