const express = require('express');

const products = require('./products');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/products', (req, res) => {
    res.json(products);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});