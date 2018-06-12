'user strict'


const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/carteira-repository');

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.tipoConta,4,'sua conta deve conter pelomenos');
    contract.hasMinLen(req.body.saldo,1,'seu saldo tem que ter pelomenos 1 caracter');
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

        res.status(201).send({ message: 'carteira cadastrado com sucesso' });

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });
    }
};