import { Injectable } from "@nestjs/common";
import { Socket, io } from "socket.io-client";

@Injectable()
export class SocketClient {

  public sockCli: Socket

  constructor () {
    this.sockCli = io('http://localhost:10086')
  }

  onModuleInit () {
    this.registerConsumerEvents()
  }

  private registerConsumerEvents () {
    this.sockCli.emit(
      'Ground Control', // Whatever the gateway is subscribe to
      {
        msg: 'o(^.^o)(o^.^)o',
      } // will trigger gateway onNewMsg() to emit a Major Tom event
    )

    // on connection 
    // Emitter.on<e>(e:'connect|connection', listener:() => void)
    this.sockCli.on(
      'connection',
      () => {
        console.log('(client) connected to gateway')
      }
    )

    // on 'Major Tom'
    // Emitter.on<e>(e:'connect|connection', listener:(...args) => void)
    this.sockCli.on(
      'Major Tom',
      (payload) => {
        console.log(`Major Tom: ${payload}`)
      }
    )


  }

}