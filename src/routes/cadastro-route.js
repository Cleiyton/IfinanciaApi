'user strict'


const express = require('express');
const router = express.Router();
const controller= require('../controllers/cadastro-controller');


router.post('/', controller.post); 
router.get('/admin/:id', controller.getById); 
router.put('/:id', controller.put);
module.exports = router;    