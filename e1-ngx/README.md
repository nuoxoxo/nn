## SETUP - Basic Nginx 🟢
```
$ brew install nginx
```
## RUN
```
$ cd ~
$ cd /usr/local/etc/nginx
$ nginx -c /___path___/nginx.conf 
$ nginx -s stop
$ nginx -s reload
```
## SETUP - Docker + Express 🔵 
```
$ cd _server_
$ npm init
$ npm init -y
$ npm install express
$ node index
```
```
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
```
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
### RUN
```
*** Build docker image ***
$ docker build . -t voila_server

*** Run containers based on the image ***
$ docker run -p 7777:10086 -d voila_server
$ docker run -p 8888:10086 -d voila_server
$ docker run -p 9999:10086 -d voila_server

*** Visit ***
http://localhost:_Each_Port_is_a_Server_
```
```
$ cd /usr/local/etc/nginx
$ nginx -c /___path___/nginx.conf
```
OR
```
$ cd /usr/local/Cellar/nginx/1.25.3
$ nginx -c /___path___/nginx.conf
```
```
*** In case unstoppable ***
$ ps -ef | grep nginx
$ kill -9 PID

*** Stop all containers ***
$ docker stop $(docker ps -aq)  
```

# &#8203;
![](https://camo.githubusercontent.com/4d5df0044a6c76f36e66fbe854420c1ad68800076836b392682bb12d4ce6a9bd/68747470733a2f2f692e696d6775722e636f6d2f363251414b4b692e706e67)
