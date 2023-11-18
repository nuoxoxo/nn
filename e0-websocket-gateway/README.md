# Create a WebSocket Gateway Server
Doc: [Gateways | NestJS](https://docs.nestjs.com/websockets/gateways)
```
*
↓
$ npm run start:dev
$ npm i --save @nestjs/websockets @nestjs/platform-socket.io
$ nest new websocket-gateway
```

### Story Mode

```
↑ [recv]: listen on 'Major Tom' in [Events]
↑ 
↑ [send]: send to 'Ground Control' (pattern to be fulfilled)
↑ [send]: fill in [Message] 
↑ 
↑ Connect ➜ http://localhost:10086
↑ Postman ➜ New ➜ Socket.IO request
↑
*** Test: sending request on Postman ***
```
- Postman: ✅ 
- Insomnia: No Socket IO [support](https://github.com/Kong/insomnia/issues/5884) 
```sc
import { Module } from "@nestjs/common";
import { myGateway } from "./gateway";

@Module({
  providers: [myGateway]
})

export class GatewayModule {}
```
```ts
// src/gateway/gateway.ts

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
    'My life is now about to have some meaning',
    'I fix you breakfast'
  ]

  onModuleInit() {
    this.server.on( // StrictEventEmitter.on<ev>(ev: 'conn', listener: (sock) => void) /// proto
      'connect', // @param ev: "connection|connect"
      (sock) => { // @param listener: callback func
        console.log('Server', sock.id, 'connected', `(${this.connCount++})`)
        sock.on( // StrictEventEmitter.on<ev>(ev: 'conn', listener: (sock, dscp?) => void) /// proto
          'disconnect', // @param ev: "disconnect"
          (reason, dscp) => { // @param listener: callback func
            console.log(
              'Server', sock.id, 'disconnected', 
              `(reason: ${reason}, dscp: ${dscp})`
            )
          }
        )
      }
    )
    // This way to listen to 'disconn' won't work. Correct way above
    /*
    this.server.on(
      'disconnect',
      (reason, dscp) => {
        console.log(
          'Server', 'disconnected', 
          `(reason: ${reason}, dscp: ${dscp})`
        )
      }
    )
    */
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
}
```

