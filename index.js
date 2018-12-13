require('dotenv').config();
const massive = require('massive');
const {json} = require('body-parser');
const express = require('express');
const cors = require('cors');
const {getAll} =require('./products_controller');
const {getOne} =require('./products_controller');
const {update} =require('./products_controller');
const {create} =require('./products_controller');
const {deleteProduct} =require('./products_controller');

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('Database Connected');
})
.catch(err => console.log(err));

app.get('/api/products', getAll);
app.get('/api/products/:product_id', getOne);
app.put('/api/products/:product_id', update);
app.post('/api/products', create);
app.delete('/api/products/:product_id', deleteProduct);

app.listen(3000, () => console.log('Listening on 3000...'))
