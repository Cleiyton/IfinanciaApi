
'user strict'

const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config')


const app = express();
const router = express.Router();

// connecta ao banco
mongoose.connect(config.connectionString);


//carrega models
const Product = require('./models/product');
const Cadastro = require('./models/cadastro');
const Carteira = require('./models/carteira');



//carega a Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const cadastroRoute = require('./routes/cadastro-route');
const carteiraRoute = require('./routes/carteira-route');


app.use(bodyParse.json());
app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
            next();
});
app.use(bodyParse.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/cadastro', cadastroRoute);
app.use('/carteira', carteiraRoute);
module.exports = app;