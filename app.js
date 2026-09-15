const express = require('express');
const paquetesRoutes = require('./routes/paquetes.routes.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/paquetes', paquetesRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});