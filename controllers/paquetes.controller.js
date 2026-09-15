const paquetes = require('../data/paquetes.js');

const crearPaquete = (req, res) => {
    const { id, cliente, peso, destino} = req.body;
    const estado = 'pendiente'; // Estado inicial del paquete
    const nuevoPaquete = { id, cliente, peso, destino, estado };
    if(!cliente || !peso || !destino) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    paquetes.push(nuevoPaquete);
    res.status(201).json(nuevoPaquete);
};

const obtenerPaquetes = (req, res) => {
    const { id } = req.params;
    const paquete = paquetes.find(p => p.id === id);
    if (!paquete) {
        return res.status(404).json({ error: 'Paquete no encontrado' });
    }
    res.json(paquete);
};

const filtrarPaquetes = (req, res) => {
    const { estado, destino } = req.query;
    let paquetesFiltrados = paquetes;

    if(!estado && !destino) {
        return res.status(400).json({ error: 'Se requiere al menos un parámetro de filtrado' });
    }

    if (estado) {
        paquetesFiltrados = paquetesFiltrados.filter(p => p.estado === estado);
    }
    if (destino) {
        paquetesFiltrados = paquetesFiltrados.filter(p => p.destino === destino);
    }
    res.json(paquetesFiltrados);
};

module.exports = {
    crearPaquete,
    obtenerPaquetes,
    filtrarPaquetes,
};