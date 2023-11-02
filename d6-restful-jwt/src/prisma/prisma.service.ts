import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {

  constructor (config: ConfigService) {
    super ({
      datasources: {
        db: {
          // use nestjs/config - way 1/2
          url: config.get('DATABASE_URL')

          // use dotenv - way 2/2
          // url: process.env.DATABASE_URL

        },
      },
    })
  }
}
