```
1:18 - todo : custom Guard and User decorator
```
Run
```j
(TERM)
$ npx prisma studio ... TERM 3

- (goto postman / insomnia)
* strat tryout :
** add Headers > Authorization > "Beare " copy-paste "access-token"

(TERM 2)
$ npm start:dev 

(TERM 1)
$ docker compose up 
↑
* this way up
```
Partial history
```j
-- Jwt --
$ npm i --save-dev @nestjs/passport passport @nestjs/jwt passport-jwt @types/passport-jwt
*
+    "@nestjs/jwt"
+    "@nestjs/passport"
+    "@types/passport-jwt"
+    "passport"
+    "passport-jwt"
*
-- Jwt --

-- end setup auth . prisma --
$ npm i class-validator class-transformer 
$ nest g controller auth --no-spec
$ nest g service auth --no-spec
$ nest g service prisma --no-spec
$ nest g module prisma 
$ nest g module auth 
$ npm i dotenv
-- setup auth . prisma --

-- end config database --
$ npx prisma db push
$ npx prisma migrate dev --create-only
* generate a migration and apply it to the database
$ docker compose up
* create docker compose and .env
* create model User in schema
$ npx prisma init
$ npm i @prisma/client
-- config database --

$ nest new d5-jwt
↑
↑
* this way up
```
