const express = require('express');
const nutritionRoutes = require('./nutritionRoutes');

const router = express.Router();

// Adiciona as rotas de nutrição ao roteador principal
router.use('/nutrition', nutritionRoutes);

// Você pode adicionar outras rotas aqui
// router.use('/outro-endpoint', outroRouter);

module.exports = router;
