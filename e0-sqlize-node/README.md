# RUN 
```q
$ install express
$ install -g nodemon
$ nodemon

// nodemon has no background support
```
# SETUP
express - go to `https://expressjs.com/en/starter/hello-world.html`
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
database - sequalize & pg
```q
$ npm i sequelize sequelize-cli
$ npm i pg pg-hstore
$ npx sequelize-cli init
```
