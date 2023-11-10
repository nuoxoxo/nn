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
  let keys = Object.keys(req)
  console.log(keys, `${keys.length} items`)
  res.send('Hello World!')
})

app.get('/world', (req, res) => {
  res.send('<h1>Hello!<h1>')
})

app.get('/hello', (req, res) => {
  res.send('<h1>World!<h1>')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
