import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketModule } from './socket-client/socket.client.module';

@Module({
  imports: [SocketModule], // added
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
