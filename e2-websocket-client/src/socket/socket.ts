import { Injectable } from "@nestjs/common";
import { Socket, io } from "socket.io-client";

@Injectable()
export class SocketClient {

  public sockCli: Socket

  constructor () {
    this.sockCli = io('http://localhost:10086')
  }

  onModuleInit () {
    this.sockCli.on(
      'connect',
      () => {
        console.log('connected to gateway:')//, gateway.id)
      }
    )
  }
}