# Create a WebSocket Gateway Server
Doc: [Gateways | NestJS](https://docs.nestjs.com/websockets/gateways)
```
*
↓
$ npm run start:dev
$ npm i --save @nestjs/websockets @nestjs/platform-socket.io
$ nest new e0-websocket-gateway
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
