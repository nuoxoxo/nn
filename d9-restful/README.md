Custom decorators: [docs.nestjs](https://docs.nestjs.com/custom-decorators)

Timestamp <details><summary></summary>

> [2h29](https://youtu.be/GHTA143_b-s&t=8940) - e2e testing . pactum
> [2h17](https://youtu.be/GHTA143_b-s&t=8220) - sigin now return 200 rather than 201 \
> [2h13](https://youtu.be/GHTA143_b-s&t=8020) - Custom _Decorators_ \
> [2h09](https://youtu.be/GHTA143_b-s&t=7770) - Custom _Guard_ \
> [2h01](https://youtu.be/GHTA143_b-s&t=7260) - Bearer token \
> [1h57](https://youtu.be/GHTA143_b-s&t=7020) - Guard: protect endpoint w/ guards \
> [1h55](https://youtu.be/GHTA143_b-s&t=6900) - 'users' controller generated . added GET /users/myself \
> [1h49](https://youtu.be/GHTA143_b-s&t=6540) - Intercept the token: Bearer strategy \
> [1h42](https://youtu.be/GHTA143_b-s&t=6125) - jwt in auth.module & auth.service \
> [1h39](https://youtu.be/GHTA143_b-s&t=5940) - jwt installed \
> [1h24](https://youtu.be/GHTA143_b-s?t=5040) - install passport \
> 1h14 - todo : signin logic \
> 1h02 - todo : signup logic w/ argon \
> 1h01m30 - whitelist and (dto: AuthDto) as param for signup \
> 58m - pipe \
> 52m - dto \
> 23m 
</details>



# Test
_do_
```
$ npm run test:e2e
```
_after setting up app.e2e-spec_
```ts
// *** app.e2e ***

describe('app e2e', () => {

  beforeAll(async () => {
    const module_ref = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()
  })
  it.todo('hello test')
})
```


# Run

__Server__
```j
$ GET /users/{i|me|mine|myself}
*** "/myself" route uses GET - but w/ a Bearer token for access ***

$ POST /auth/sign{in|up}
*** "/signup" "/signin" routes require mail and pass sent w/ POST ***
```
```j
$ npm run go	/// will leave migrations untouched
*** or *** 
$ npm run gone	/// will delete database
```
__Try it out__
```
$ curl -X POST -d "mail=abc@xyz.org&pass=abc123xyz" http://localhost:10086/auth/signin
$ curl -X POST -d "mail=abc@xyz.org&pass=abc123xyz" http://localhost:10086/auth/signup
```

# Notes

<details><summary>gloss</summary>
&#8301;

Pipes
> process data before it reaches the route handler \
> commonly used to sanitize / validate incoming data

bootstrap function
> a function to start and init a NestJs app, not strictly but often used \
> NestFactory.create
> - creates an instance of the Nest app 
> - sets up an Express server

Controllers 
> ... are responsible for handling incoming requests and returning responses to the client.

Providers
>  can be injected as a dependency.

</details>


<!--
<details><summary>carto</summary>
&#8301;
-->

### Setting up Jwt Strat
```sh
$ nest g controller user --no-spec
```

### Launch server w/ empty "_./prisma/migrations/_"
_Updated way_
```sh
$ npm run go
```
OR
```sh
$ docker compose up mydatabase -d

$ npx prisma migrate dev
$ npx prisma studio

$ npm run start:dev

$ curl -X POST -d "mail=_._._&pass=_._._" http://localhost:_._._/auth/signup
$ curl -X POST -d "mail=_._._&pass=_._._" http://localhost:_._._/auth/signin
```

### Bugfix x2
```c
// sync database with current Prisma schema
$ npx prisma db push

// fix .env varibles reading
---> use `process.env._` in /prisma.service.ts
```

### Get prisma-cli and prima client
```c
npm i prisma
npm i @prisma/client
npx prisma init
// ... set up model(s) by hand at schema
npx prisma --help
npx prisma migrate dev

// need module (./src/prisma/) to handle orm
nest g module prisma
nest g service prisma // --no-spec
```
### Get docker running
```c
docker ps
docker -v
docker compose up mydatabase -d
	// -d : background
	// mydatabase : name defined in yaml
docker logs $_Container_ID
```
### Live
```c
nest g module auth
nest g module user
npm run start:dev // Go live
// Use postman once live
```
### Nestjs
```
npm i -g @nestjs/cli
nest new restful

- del. app.controller.* . app.service.ts
- cleanup : app.module.ts
```
```coffee
// app.module.ts
import { Module } from '@nestjs/common';

@Module({
  imports: [],
})

export class AppModule {}
```

### Angular snippet
```c
npm install -g @angular/cli
ng new hello_world
ng generate component hello
ng serve // Go live
```

<!--
</details>
-->

