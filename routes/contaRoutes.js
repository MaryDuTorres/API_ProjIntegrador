const express = require('express');
const router = express.Router();
const contaController = require('../controllers/contaController');

router.post('/registrar', contaController.registrar); // Criação de usuário
router.post('/login', contaController.login); // Login do usuário

module.exports = router;