'user stric'

const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');


exports.getById = async (id) => {
    const res =await Cadastro
        .findById(id)
        return res;

}


exports.create = async (data) => {
    const cadastro = new Cadastro(data);
    await cadastro.save();

}


exports.update = async (id, data) => {
    await Cadastro
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                password: data.password
            }
        })


}


exports.delete = async (id) => {
    await Cadastro
        .findByIdAndRemove(id)

}