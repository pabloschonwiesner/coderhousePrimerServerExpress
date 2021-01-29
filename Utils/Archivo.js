const fs = require('fs')

class Archivo {

  constructor( archivo ) {
    this.archivo = archivo
  }

  async leer () {
    try {
      let contenido = await fs.promises.readFile(`./${this.archivo}`, 'utf-8')
      return contenido
    } catch ( err ) { 
      return []
    } 
  }

  async guardar (producto) {
    try {

      // leo el archivo
      let stringProductos = await this.leer()

      // si esta vacío arrayProducto = [] sino el contenido del archivo
      let arrayProductos = stringProductos.length == 0 ? [] : JSON.parse(stringProductos)

      // genero el id
      let id = arrayProductos.length + 1
      producto.id = id

      // guardo el producto en el array
      arrayProductos.push(producto)

      // sobreescribo el archivo
      await fs.promises.writeFile(`./${this.archivo}`, JSON.stringify(arrayProductos, null, '\t'), 'utf-8')
      console.log('Producto agregado al archivo!')
    } catch ( err ) { console.log(`Error guardar el archivo ${this.archivo}: ${err}`) }
  }

  async borrar () {
    try {
      await fs.promises.unlink(this.archivo)
    } catch ( err ) { console.log(`Error al borrar el archivo ${this.archivo}: ${err}`)}
  }
}

module.exports = Archivo