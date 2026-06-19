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

// formulario para editar
const formEditarArticulo = (req, res) => {
    const articulo = await obtenerArticuloporID(req.params.id)
    res.render("editar", { articulo })
}

// actualizar articulo
const actualizarArticController = async (req, res) => {
    const { titulo, contenido, categoria } = req.body
    await actualizarArticulo(req.params.id,titulo, contenido, categoria)
    res.redirect("/articulos")
}

// eliminar articulo
const EliminarArticController = async (req, res) => {
    await eliminarArticulo(req.params.id)
    res.redirect("/articulos")
}

// votar articulo
const votarArticuloController = async (req, res) => {
    const votos = await votarArticulo(req.params.id)
    res.json({ votos })
}

module.exports = {
    listarArticulos,
        formCrearArticulo,
        CrearArticController,
        formEditarArticulo,
        actualizarArticController,
        EliminarArticController,
        votarArticuloController

}