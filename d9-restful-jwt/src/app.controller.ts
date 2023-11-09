import { Controller, Get, Post } from "@nestjs/common"

@Controller()
export class AppController {
    @Get()
    Get_root_hello() {
        return "Hello, World! (from @GET)"
    }

    @Get('2')
    Get_root_hello2() {
        return "Hello, World! (from @GET (2))"
    }

    @Post()
    Post_root_hello() {
        return "Hello, World! (from @POST)"
    }
}