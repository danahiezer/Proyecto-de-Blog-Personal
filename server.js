const express = require("express")
const { pool, Pool } = require("pg")
const { engine } = require("express-handlebars")
const { database } = require("pg/lib/defaults")
const app = express()
const PORT = 3000

// conectar a postgresql
const pool = new Pool({
    host: "postgres",
    user: "admin",
    password: "dan",
    database: "blog_personal",
    port: 5432
})

pool.connect()
  .then(() => console.log('Conectado a PostgreSQL'))
  .catch(err => console.log('Error:', err))

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