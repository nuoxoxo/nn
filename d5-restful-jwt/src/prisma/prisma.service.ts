import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {

  constructor () {

    super ({
      datasources: {
        db: {
          url: process.env.DATABASE_URL
          // url: `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.POSTGRES_DB}?schema=public`
        },
      },
    })
  }
}
