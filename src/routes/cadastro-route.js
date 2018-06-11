'user strict'


const express = require('express');
const router = express.Router();
const controller= require('../controllers/cadastro-controller');

router.post('/', controller.post); 

module.exports = router;    