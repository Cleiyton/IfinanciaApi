'user stric'

const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');

exports.create = async (data) => {
    const cadastro = new Cadastro(data);
    await cadastro.save();

}