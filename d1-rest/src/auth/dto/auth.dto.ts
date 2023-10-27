import { IsEmail, IsNotEmpty, IsString } from "class-validator";

// export interface AuthDto {
export class AuthDto {

  @IsEmail()
  @IsNotEmpty()
  mail: string;

  @IsString()
  @IsNotEmpty()
  pass: string
}