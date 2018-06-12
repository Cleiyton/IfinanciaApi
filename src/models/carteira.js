'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    }, 

    tipoConta: {
        type: String,
        required: true
    },
    saldo: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Carteira', schema);