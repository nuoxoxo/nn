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
  res.send(
    '<br /><img src="https://static.npmjs.com/attachments/ck3uwed1cmso79y74pjugy10f-gak-2x.png"></img>'
  )
})

app.get('/world', (req, res) => {
  res.send("<h1>Hello!</h1><br /><img src='https://avatars.githubusercontent.com/u/6078720?s=200&v=4'>")
})

app.get('/hello', (req, res) => {
  res.send("<h1>World!</h1><br /><img src='https://avatars.githubusercontent.com/u/22247014?s=200&v=4'>")
})

app.get('/42', (req, res) => {
  res.send("<img src='https://raw.githubusercontent.com/sequelize/sequelize/HEAD/logo.svg'>")
})



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
