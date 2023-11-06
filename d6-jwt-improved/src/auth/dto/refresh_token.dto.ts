import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class RefreshTokenDto {
  @IsNotEmpty()
  @IsNumber()
  sub: string;

  @IsNotEmpty()
  @IsString()
  refresh_token: string
}

// THIS DTO IS A TRIAL AND IS NOT IN USE
