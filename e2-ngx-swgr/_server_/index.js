const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.E_ONE_PORT

const swaggerDOC = require('swagger-jsdoc')
// const swaggerUI = require('swagger-ui-express')

app.get('/', (req, res) => {
    res.send('<h1>welcome to one of the many enpoints</h1>')
})

app.listen(port, () => {
    console.log(`listening on ${port}...`)
})
