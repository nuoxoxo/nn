import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
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

  /*
  listening on env-defined port for incoming HTTP requests 
  2 ways to use environment variables
  */

  // use dotenv - way 1/2
  await app.listen(process.env.LISTEN_PORT)

  // use nestjs/config - way 2/2
  // await app.listen(app.get(ConfigService).get('LISTEN_PORT'))

  // dotenv & nestjs/confi - print em out
  console.log('process.env   -',
    process.env.LISTEN_PORT,
    typeof process.env.LISTEN_PORT
  )
  console.log('nestjs/config -', 
    app.get(ConfigService).get('LISTEN_PORT'),
    typeof app.get(ConfigService).get('LISTEN_PORT')
  )

  console.log(AppModule, typeof AppModule)

}

bootstrap();
