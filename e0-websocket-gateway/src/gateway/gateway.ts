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

  private replyArray: string[] = [
    'Hello', 'Good morning', 'Buon giorno', 'Ohayo', 'Buenas dias', 'Where are you going', 'Thank you, God', 'You woke up',
    'My life is now about to have some meaning', 'Rubber Soul',
    'I fix you breakfast', 'Sgt. Pepper\'s Lonely Hearts Club Band',
    'Magical Mystery Tour'
  ]

  onModuleInit() {
    return this.registerEmitterEvents()
  }

  onModuleDestroy(signal: string) {
    console.log(signal, 'disconnected')
  }

  @SubscribeMessage('Ground Control') // param: a pattern to be fulfilled
  onNewMsg (@MessageBody () payload: any) {
    console.log( payload )
    this.server.emit(
      'Major Tom',
      `${this.replyArray[Math.floor(Math.random() * this.replyArray.length)]}! (original text: \"${payload}\")`
    )
  }

  private registerEmitterEvents = () => {
    this.server.on( // StrictEventEmitter.on<e>(e: 'conn', listener: (sock) => void) /// proto
      'connect', // @param ev: "connection|connect"
      (sock) => { // @param listener: callback func
        console.log('Server', sock.id, 'connected', `(${this.connCount++})`)
        sock.on( // StrictEventEmitter.on<e>(e: 'conn', listener: (sock, dscp?) => void) /// proto
          'disconnect', // @param ev: "disconnect"
          (reason, dscp) => { // @param listener: callback func
            console.log(
              `Server ${sock.id} disconnected`, '\n',
              `(reason: ${reason}, dscp: ${dscp})`
            )
          }
        )
      }
    )
  }

  /* end */
}
