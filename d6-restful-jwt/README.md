# Run

__server__
```
$ npm run go
```
__curl__
```
$ curl -X POST -d "mail=abc@xyz.org&pass=abc123xyz" http://localhost:10086/auth/signin
$ curl -X POST -d "mail=abc@xyz.org&pass=abc123xyz" http://localhost:10086/auth/signup
```

# Notes
<details><summary>timestamp</summary>
&#8301;

> 1h24 - todo : jwt \
> ~~1h14 - todo : signin logic~~ \
> ~~1h02 - todo : signup logic w/ argon~~ \
> ~~1h01m30 - whitelist and (dto: AuthDto) as param for signup~~ \
> ~~58m - pipe~~ \
> ~~52m - dto~~ \
> ~~23m~~

</details>

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

### Launch server w/ empty "_./prisma/migrations/_"
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

