const pool = require("../database")

// obtener articulos y ordenados por mas recientes
const obtenerArticulos = async () => {
    const resultado = await pool.query(
        "SELECT * FROM articulos ORDER BY created_at DESC"
    )
    return resultado.rows // . row devuelve en array de todos los registros

}

// obtener articulos por id
const obtenerArticuloporID = async (id) => {
    const resultado = await pool.query(
        "SELECT * FROM articulos WHERE id = $1",[id]
    )
    return resultado.rows [0]
}

// crear un articulo
const crearArticulo = async (titulo, contenido, categoria) => {
    await pool.query(
        "INSERT INTO articulos (titulo,contenido,categoria) VALUES ($1,$2,$3)",
        [titulo,contenido,categoria]
    )
}

// actualizar articulo
const actualizarArticulo = async (id,titulo,contenido,categoria) => {
    await pool.query(
        "UPDATE articulos SET titulo=$1, contenido=$2, categoria=$3 WHERE id=$4",
        [titulo,contenido,categoria,parseInt(id)]
    )
}

// eliminar articulo
const eliminarArticulo = async (id) => {
    await pool.query(
        "DELETE FROM articulos WHERE id=$1",
        [id]
    )
}
// votar un articulo
const votarArticulo = async (id) => {
    const resultado = await pool.query(
        "UPDATE articulos SET votos = votos + 1 WHERE id=$1 RETURNING votos",
        [id]
    )
    return resultado.rows[0].votos
}

module.exports = {
    obtenerArticulos,
    obtenerArticuloporID,
    crearArticulo,
    actualizarArticulo,
    eliminarArticulo,
    votarArticulo
}