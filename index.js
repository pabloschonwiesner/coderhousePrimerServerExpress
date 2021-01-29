const express = require('express')
const bodyParser = require('body-parser')
const PORT = 8080

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(require('./routes'))



const server = app.listen(PORT, () => console.log(`Servidor funcionando en el puerto ${PORT}`))
server.on('error', (err) => console.log(`Error en el servidor: ${err}`))