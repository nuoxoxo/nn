import { Controller } from "@nestjs/common"
import { AuthService } from "./auth.service";

@Controller()
export class AuthController{

  constructor(private authService: AuthService) {
    this.authService.test()
  }
}

//  todo : create 2 endpoints
  //  1. login endpoint
  //  2. signup endpoint
  //  How? ---> using decorator
