# Make a client
Doc: [Gateways | NestJS](https://docs.nestjs.com/websockets/gateways)
```
*
↓
$ npm run start:dev
$ npm install socket.io-client
$ nest new websocket-client
```

### Story Mode
```ts
// src/socket/socket.ts

import { Injectable } from "@nestjs/common";
import { Socket, io } from "socket.io-client";

@Injectable()
export class SocketClient {

  public sockCli: Socket

  constructor () {
    this.sockCli = io('http://localhost:10086')
  }

  onModuleInit () {
    this.sockCli.on( // Emitter.on<ev>(ev:'conn', listener:() => void)
      'connect',
      () => {
        console.log('connected to gateway:')
      }
    )
    this.sockCli.on('Major Tom', (payload) => {console.log(payload)})
  }
}
```
```sc
// src/socket/socket.module.ts

import { Module } from "@nestjs/common";
import { SocketClient } from "./socket";

@Module({
  providers: [SocketClient],
})

export class SocketModule {}
```


