import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
  @IsNotEmpty()
  @IsEmail()
  mail: string;

  @IsNotEmpty()
  @IsString()
  pass: string
}