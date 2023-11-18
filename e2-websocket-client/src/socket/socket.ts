import { Injectable } from "@nestjs/common";
import { Socket, io } from "socket.io-client";

@Injectable()
export class SocketClient {

  public sockCli: Socket

  constructor () {
    this.sockCli = io('http://localhost:10086')
  }

  onModuleInit () {

    // Originally defined here
    /*
     this.sockCli.on('connect', () => {console.log('(client) connected to gateway')})
    this.sockCli.on('Major Tom', (payload) => {console.log(payload)})
    */

    // Updated version: defined as priavte function
    this.registerConsumerEvents()

  }

  private registerConsumerEvents () {

    // Emitter.on<ev>(ev:'connect|connection', listener:() => void)
    this.sockCli.on(
      'connect',
      () => {
        console.log('(client) connected to gateway')
      }
    )
    // Emitter.on<ev>(ev:'connect|connection', listener:(...args) => void)
    this.sockCli.on(
      'Major Tom',
      (payload) => {
        console.log(payload)
      }
    )
  }

}