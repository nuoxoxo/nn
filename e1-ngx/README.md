## SETUP
```
$ brew install nginx
```
## RUN
```
$ cd ~
$ cd /usr/local/etc/nginx
$ nginx
$ nginx -s stop
$ nginx -s reload
```
or
```
$ nginx -c /___path___/nginx.conf 
```
## SETUP - express sub-project
```
$ cd _server_
$ npm init
$ npm init -y
$ npm install express
($ node express)
```
```js
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.E_ONE_PORT

app.get('/', (req, res) => {
    res.send('<h1>welcome to one of the many enpoints</h1>')
})

app.listen(port, () => {
    console.log(`listening on ${port}...`)
})
```
```dockerfile
# get a minified node image on apline linux
FROM node:slim

ENV PORT=${E_ONE_PORT}
WORKDIR /_whatevernameshouldwork_
COPY . .
RUN npm install

# start the app
CMD [ "node", "index" ]

# server port exposed
EXPOSE ${PORT}
```
```j
*** Build docker image ***
$ docker build . -t voila_server

*** Run containers based on the image ***
$ docker run -p 7777:10086 -d voila_server
$ docker run -p 8888:10086 -d voila_server
$ docker run -p 9999:10086 -d voila_server
```
