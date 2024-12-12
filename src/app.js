const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/nutritionRoutes'); // Importando as rotas corretamente
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Usar as rotas com o prefixo /api
app.use('/api', routes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
