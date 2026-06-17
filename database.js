// database.js
const { Pool } = require('pg')

const pool = new Pool({
  host: 'postgres',
  user: 'admin',
  password: 'admin123',
  database: 'blog_personal',
  port: 5432
})

const crearTablas = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS articulos (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      contenido TEXT NOT NULL,
      categoria VARCHAR(100),
      votos INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `)
  console.log('Tablas creadas correctamente')
}

crearTablas()

module.exports = pool