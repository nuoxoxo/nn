import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
// @default template
// export class PrismaService {}
export class PrismaService extends PrismaClient {}
