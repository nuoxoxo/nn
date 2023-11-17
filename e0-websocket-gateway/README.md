# Create a Websocket Gateway Server
Doc: [Gateways | NestJS](https://docs.nestjs.com/websockets/gateways)

# history
No Socket IO support on Insomnia: [issue](https://github.com/Kong/insomnia/issues/5884)
```
↑ fill in the pattern to be fulfilled (eg. 'newMessagePattern')
↑ fill in message content
↑ http://localhost:10086
↑ New ➜ Socket.IO request
↑
*** Test: sending request on Postman ***
```
```ts
// src/gateway/gateway.module.ts
@Module({
  providers: [myGateway]
})
export class GatewayModule {}
```
```ts
// src/gateway/gateway.ts
@WebSocketGateway()
export class myGateway {
  @SubscribeMessage('newMessagePattern')
  onNewMsg (@MessageBody () payload: any) {
    console.log(payload)
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
