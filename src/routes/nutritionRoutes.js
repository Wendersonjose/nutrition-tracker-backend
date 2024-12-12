const express = require('express');
const router = express.Router();

// Definir a rota para '/api/food'
router.get('/food', (req, res) => {
  res.send('Dados sobre alimentos');
});

module.exports = router;
