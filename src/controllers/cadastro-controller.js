'use strict'


const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/cadastro-repository');


exports.get = async (req, res, next) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });

    }

}

exports.getById = async (req, res, next) => {
    try {
        let data = await repository.getById(req.params.id);
        res.status(200).send(data);

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });


    }
}


exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'o nome deve conter pelomenos 3 caracteres');
    contract.isEmail(req.body.email, 'E-mail invalido');
    contract.hasMinLen(req.body.password, 6, 'a senha deve conter pelomenos 6 caracteres');
    /**
     * se os dados forem invalidos
     *
     */
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body);

        res.status(201).send({ message: 'Cliente cadastrado com sucesso' });

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });
    }
};

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body)
        res.status(200).send({ message: 'Usuario atualizado com sucesso!' });

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });
    }
};


