import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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

  // using Swagger
  const swgr_doc_config = new DocumentBuilder()
    .setTitle('Documentation Tryout')
    .setDescription('nuoxoxo restful document')
    .setVersion('1.0.0.8.6')
    .build()
  const swgr_doc = SwaggerModule.createDocument(app, swgr_doc_config)
  SwaggerModule.setup('api', app, swgr_doc)
  // using Swagger // 

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
  console.log('JWT_SECRET    -',
    process.env.JWT_SECRET
  )

  console.log(AppModule, typeof AppModule)

}

bootstrap();
