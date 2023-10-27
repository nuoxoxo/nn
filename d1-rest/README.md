Controllers 
> ... are responsible for handling incoming requests and returning responses to the client.

Providers
>  can be injected as a dependency.

Timestamp 
> 54m:pipe ~~52m:dto~~ ~~23m~~

---

Get prisma-cli and prima client
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
Get docker running
```c
docker ps
docker -v
docker compose up mydatabase -d
	// -d : background
	// mydatabase : name defined in yaml
docker logs $_Container_ID
```
Live
```c
nest g module auth
nest g module user
npm start dev // Go live
// Use postman once live
```
Nestjs
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

Angular snippet
```c
npm install -g @angular/cli
ng new hello_world
ng generate component hello
ng serve // Go live
```
