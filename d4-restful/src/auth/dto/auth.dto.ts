import { IsEmail, IsNotEmpty, IsString } from "class-validator";
/*
import 3 decorators from the class-validator library
*/

export class AuthDto {

  /*
  define a class that represents the data to be sent
  in an authentication request
  */

  @IsEmail()
  @IsNotEmpty()
  /*
  nothing happens unless `app.useGlobalPipes` is added in main.ts
  */
  mail: string;

  @IsString()
  @IsNotEmpty()
  pass: string
}