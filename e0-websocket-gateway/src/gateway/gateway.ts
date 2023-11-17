import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class myGateway {
  @SubscribeMessage('newMessagePattern') // param is "chosen pattern to be fulfilled"
  onNewMsg (@MessageBody () payload: any) {
    console.log( payload )
  }
}
