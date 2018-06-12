'user stric'

const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');


exports.get = async ()=>{
    const res = await Cadastro
    .find({
        active:true
    }, 'name');
    return res;
}

exports.authenticate = async (data)=>{
    const res = await Cadastro
    .findOne({
        email:data.email,
        password:data.password
    });
    return res;
}


exports.get = async ()=>{
    const res = await Cadastro
    .find({
        active:true
    }, 'name');
    return res;
}
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
        .findByIdAndRemove(id);

}