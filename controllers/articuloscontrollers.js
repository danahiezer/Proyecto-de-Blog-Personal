const {
    obtenerArticulos,
    obtenerArticuloporID,
    crearArticulo,
    actualizarArticulo,
    eliminarArticulo,
    votarArticulo
} = require("../models/articulosmodel")

// listar articulos
const listarArticulos = async (req, res) => {
    const articulo = await obtenerArticulos()
    res.render("articulos", { articulo })
}

// fromulario para crear articulo 
const formCrearArticulo = (req, res) => {
    res.render("crear")
}

// crear articulo
const CrearArticController = async (req, res) => {
    const {titulo,contenido,categoria} = req.body
    await crearArticulo(titulo,contenido,categoria)
    res.redirect("/articulos")
}