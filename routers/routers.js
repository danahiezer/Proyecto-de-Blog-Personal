const express = require("express");
const Router = express.Router()

const {
        listarArticulos,
        formCrearArticulo,
        CrearArticController,
        formEditarArticulo,
        actualizarArticController,
        EliminarArticController,
        votarArticuloController
} = require("../controllers/articuloscontrollers")

Router.get("/", listarArticulos)
Router.get("/crear", formCrearArticulo)
Router.post("/crear", CrearArticController)
Router.get("/:id/editar", formEditarArticulo)
Router.post("/:id/editar", actualizarArticController)
Router.post("/:id/eliminar", EliminarArticController)
Router.post("/:id/votar", votarArticuloController)

module.exports = Router