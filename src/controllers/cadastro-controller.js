'use strict'


const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/cadastro-repositroy');

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'o nome deve conter pelomenos 3 caracteres');
    contract.isEmail(req.body.email,  'E-mail invalido');
    contract.hasMinLen(req.body.password, 6, 'a senha deve conter pelomenos 6 caracteres');
    contract.hasMinLenT(req.body.sexo,1);
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

