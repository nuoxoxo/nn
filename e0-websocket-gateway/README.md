# Create a Websocket Gateway Server
Doc: [Gateways | NestJS](https://docs.nestjs.com/websockets/gateways)

# Story Mode

```
↑ [recv]: listen on 'route_two' in [Events]
↑ 
↑ [send]: send to 'route_one' (pattern to be fulfilled)
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
// src/gateway/gateway.module.ts

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
```
```
$ npm run start:dev
$ npm i --save @nestjs/websockets @nestjs/platform-socket.io
$ nest new e0-websocket-gateway
↑
*
```
