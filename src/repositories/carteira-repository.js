
'user strict'

const mongoose = require('mongoose');
const Carteira = mongoose.model('Carteira');

exports.get = async ()=>{
    const res = await Carteira
    .find({
        active:true
    }, 'saldo');
    return res;
}

exports.getById = async (id) => {
    const res =await Carteira
        .findById(id)
        return res;

}

exports.create = async (data) => {
    const carteira = new Carteira(data);
    await carteira.save();

}

exports.update = async (id, data) => {
    await Carteira
        .findByIdAndUpdate(id, {
            $set: {
                name:data.name,
                tipoConta: data.tipoConta,
                saldo: data.saldo
            }
        })


}

exports.delete = async (id) => {
    await Carteira
        .findByIdAndRemove(id);

}