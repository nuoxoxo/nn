# Abandoned

### ~~RUN~~ 
```q
$ nodemon

// nodemon has no run-in-background support
```
### ~~SETUP~~
Express template:

`https://expressjs.com/en/starter/hello-world.html`

```ts
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
```
Install sequalize, pg, etc.
```j
$ install express
$ install -g nodemon
$ npm i sequelize sequelize-cli
$ npm i pg pg-hstore
$ npx sequelize-cli init

*** FIRST MIGRATION *** 
$ npx sequelize-cli model:generate --name Badges --attributes name:string,desc:string,publ:boolean,year:number

$ brew services start postgresql
$ psql
```

