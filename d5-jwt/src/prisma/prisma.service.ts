import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv'


@Injectable()
// export class PrismaService {} // raw
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
    constructor () {
      dotenv.config()
      super ({
        datasources: {
          db: {
            url: process.env.DATABASE_URL
          }
        }
      })
    }
    async onModuleDestroy() { await this.$connect() }
    async onModuleInit() { await this.$disconnect() }
}