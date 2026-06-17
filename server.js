const express = require("express")
const pool = require("./database")
const { engine } = require("express-handlebars")
const app = express()
const PORT = 3000


// Motor de plantillas
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})