const express = require('express');
const router = express.Router();

const {
    crearPaquete,
    obtenerPaquetes,
    filtrarPaquetes,
} = require('../controllers/paquetes.controller.js');

router.post('/', crearPaquete);
router.get('/:id', obtenerPaquetes);
router.get('/', filtrarPaquetes);

module.exports = router;