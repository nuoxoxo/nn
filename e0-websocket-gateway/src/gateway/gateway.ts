import { OnModuleInit } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway()
export class myGateway implements OnModuleInit {

  @WebSocketServer()
  server: Server;

  private connCount: number = 0
  private disconnCount: number = 0

  onModuleInit() {
    this.server.on(
      'connection',
      (sock) => {
        console.log(sock.id, 'connected', this.connCount++)
        sock.on('disconnect', () => {
          console.log(sock.id, 'disconnected', this.disconnCount++)
        })
      }
    )
  }

  onModuleDestroy(signal: string) {
    console.log(signal, 'connected', this.disconnCount++)
  }

  @SubscribeMessage('route_one') // param: a pattern to be fulfilled
  onNewMsg (@MessageBody () payload: any) {
    console.log( payload )
    this.server.emit(
      'route_two',
      `hello! (replying to \"${payload}\")`
    )
  }
}
