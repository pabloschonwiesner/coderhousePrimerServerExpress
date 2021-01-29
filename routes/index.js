const express = require('express')
const Archivo = require('./../Utils/Archivo')

const app = express()
const archivo = new Archivo('Files/productos.txt')
const visitas = { items: 0, item: 0}

app.get('/items', async (req, res) => {
  try {
    const productos = JSON.parse(await archivo.leer())
    visitas.items++
    return res.status(200).json({ items: productos, cantidad: productos.length })
  } catch ( err ) { return respuesta.errorServidor(res, err)}
})

app.get('/item-random', async (req, res) => {
  try {
    const productos = JSON.parse(await archivo.leer())
    const index = Math.floor(Math.random() * (productos.length - 0) + 0)
    visitas.item++
    return res.status(200).json({ item: productos[index] })
  } catch ( err ) { return respuesta.errorServidor(res, err)}
})

app.get('/visitas', async (req, res) => {
  try {
    return res.status(200).json(visitas)
  } catch ( err ) { return respuesta.errorServidor(res, err)}
})

module.exports = app