const express = require('express');
const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const app = express();
const conectarBanco = require('./config/db');

require('dotenv').config();

const contaRoutes = require('./routes/contaRoutes');

conectarBanco();

app.use(express.json());
app.use('/api', contaRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
