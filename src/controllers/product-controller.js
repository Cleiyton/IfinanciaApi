'use strict'


const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

exports.get = async (req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });

    }

}

//trazendo os produtos pelo slung 
exports.getBySlug = async (req, res, next) => {
    try {
        let data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });


    }
}
//trazendo os produtos pelo id 
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

//trazendo todos os produtos cuja a tag seja o nome que esta passando no paramentros 
exports.getByTag = async (req, res, next) => {
    try {
        let data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });


    }
}


exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'o titulo deve conter pelomenos 3 caracteres');
    contract.hasMinLen(req.body.slug, 3, 'o titulo deve conter pelomenos 3 caracteres');
    contract.hasMinLen(req.body.description, 3, 'o titulo deve conter pelomenos 3 caracteres');

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

        res.status(201).send({ message: 'Produto Cadastrado com sucesso' });

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });
    }
};

/**
 * modelo para fazer alteração no banco 
 */

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body)
        res.status(200).send({ message: 'Produto atualizado com sucesso!' });

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });
    }
};

/**
 * exemplo para excluir do banco
 */
exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.body.id)

        res.status(200).send({ message: 'Produto removido com sucesso!' });

    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });
    }
};