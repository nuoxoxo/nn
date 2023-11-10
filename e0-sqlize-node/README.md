# RUN 
```q
$ install express
$ install -g nodemon
```
Go to `https://expressjs.com/en/starter/hello-world.html`
```rs
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
