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
# fetching the minified node image on apline linux
FROM node:slim

# declaring env
ENV PORT=${E_ONE_PORT}

# setting up the work directory
WORKDIR /_whatevernameshouldwork_

# copying all the files in our project
COPY . .

# installing dependencies
RUN npm install

# starting our application
CMD [ "node", "index" ]

# exposing server port
EXPOSE ${PORT}
```
