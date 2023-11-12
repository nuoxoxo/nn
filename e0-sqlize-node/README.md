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
```j
$ install express
$ install -g nodemon
$ npm i sequelize sequelize-cli
$ npm i pg pg-hstore
$ npx sequelize-cli init

*** FIRST MIGRATION *** 
$ npx sequelize-cli model:generate --name Badges --attributes name:string,desc:string,publ:boolean,year:number
```

# &#8203;
![](https://camo.githubusercontent.com/4d5df0044a6c76f36e66fbe854420c1ad68800076836b392682bb12d4ce6a9bd/68747470733a2f2f692e696d6775722e636f6d2f363251414b4b692e706e67)
