const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.E_ONE_PORT

const swaggerDOC = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const options = {
    definition: {
        openapi: '3.0.0',
        servers: [{
            url: 'http://localhost:' + port,
        }]
    },
    apis: []
}
const spacs = swaggerDOC(options)
app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(spacs)
)

app.get('/', (req, res) => {
    res.send('<h1>welcome to one of the many enpoints</h1>')
})

app.listen(port, () => {
    console.log(`listening on ${port}...`)
})
