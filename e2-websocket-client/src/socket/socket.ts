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
    // on connection
    // Emitter.on<ev>(ev:'connect|connection', listener:() => void)
    this.sockCli.on(
      'connection',
      () => {
        console.log('(client) connected to gateway')
      }
    )

    // on 'Major tom'
    // Emitter.on<ev>(ev:'connect|connection', listener:(...args) => void)
    this.sockCli.on(
      'Major Tom',
      (payload) => {
        console.log(payload)
      }
    )
  }

}