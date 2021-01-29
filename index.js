const express = require('express')
const PORT = 8080

app.use(require('./routes'))

const server = app.listen(PORT, () => console.log(`Servidor funcionando en el puerto ${PORT}`))
server.on('error', (err) => console.log(`Error en el servidor: ${err}`))