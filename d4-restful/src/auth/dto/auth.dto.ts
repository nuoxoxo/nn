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
  mail: string;
  /*
  Both pipes will NOT run unless `app.useGlobalPipes` is set in main.ts
  */

  @IsString()
  @IsNotEmpty()
  pass: string
}