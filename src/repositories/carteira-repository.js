
'user strict'

const mongoose = require('mongoose');
const Carteira = mongoose.model('Carteira');

exports.create = async (data) => {
    const carteira = new Carteira(data);
    await carteira.save();

}