import { OnModuleInit } from "@nestjs/common";
import { Server } from "socket.io";
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer 
} from "@nestjs/websockets";

@WebSocketGateway()
export class myGateway implements OnModuleInit {

  @WebSocketServer()
  server: Server

  private connCount: number = 0
  // private disconnCount: number = 0

  onModuleInit() {
    this.server.on( // StrictEventEmitter.on<ev>(ev: 'conn', listener: (sock) => void)
      'connection', // @param ev: "connection"
      (sock) => { // @param listener: callback func
        console.log('Server', sock.id, 'connected', `(${this.connCount++})`)
        sock.on( // StrictEventEmitter.on<ev>(ev: 'conn', listener: (sock, dscp?) => void)
          'disconnect', // @param ev: "connection"
          (reason, dscp) => { // @param listener: callback func
            console.log(
              'Server', sock.id, 'disconnected', 
              `(reason: ${reason}, dscp: ${dscp})`
            )
          }
        )
      }
    )
  }

  onModuleDestroy(signal: string) {
    console.log(signal, 'disconnected')
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
