<details><summary></summary>

0:21 --- 1st migration

</details>

# RUN 
```q
$ nodemon

// nodemon has no run-in-background support
```
# SETUP
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
```q
$ install express
$ install -g nodemon
$ npm i sequelize sequelize-cli
$ npm i pg pg-hstore
$ npx sequelize-cli init
```
