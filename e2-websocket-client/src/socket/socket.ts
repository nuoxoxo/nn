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