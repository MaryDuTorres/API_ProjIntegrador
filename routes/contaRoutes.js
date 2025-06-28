const express = require('express');
const router = express.Router();
const contaController = require('../controllers/contaController');

router.post('/registrar', contaController.registrar); 
router.post('/login', contaController.login); 
router.put('/editarConta:id', contaController.editarConta);

module.exports = router;