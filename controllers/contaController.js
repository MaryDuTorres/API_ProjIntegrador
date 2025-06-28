const Usuario = require('../models/contaModel');
const jwt = require('jsonwebtoken');


exports.registrar = async (req, res) => {
    const { nome, email, cpf, telefone, tipo_pessoa, senha } = req.body;
    try {
        const usuario = new Usuario({ nome, email, cpf, telefone, tipo_pessoa, senha });
        await usuario.save();
        res.status(201).json({ mensagem: 'Usuário criado com sucesso' });
    } catch (err) {
        res.status(400).json({ mensagem: 'Erro ao registrar usuário', erro: err.message });
    }
};




exports.login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario || !(await usuario.compararSenha(senha))) {
            return res.status(401).json({ mensagem: 'Credenciais inválidas' });
        }

        
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro no login', erro: err.message });
    }
};

exports.editarConta = async (req, res) => {
  try {
    const { id } = req.params;
    const contaAtualizada = await Conta.findByIdAndUpdate(id, req.body, { new: true });
    if (!contaAtualizada) {
      return res.status(404).json({ erro: 'Conta não encontrada' });
    }
    res.json(contaAtualizada);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};