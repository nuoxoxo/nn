const PORT = 10086

/************ npmJS.com ************/

/*
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT)
*/


/************ expressjs.com ************/

const express = require('express')
const app = express()
const port = PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
