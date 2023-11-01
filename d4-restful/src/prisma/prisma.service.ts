import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {

  constructor () {

    super ({
      datasources: {
        db: {
          url: 'postgresql://${DB_USERNAME}:${DB_PASSWORD}@localhost:${DB_PORT}/${POSTGRES_DB}?schema=public'
        },
      },
    })
  }
}
