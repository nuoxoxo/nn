import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class myGateway {
  @SubscribeMessage('newMsg')
  onNewMsg (@MessageBody () payload: any) {
    console.log(payload)
  }
}