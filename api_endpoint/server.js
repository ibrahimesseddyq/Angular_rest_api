let express = require("express");
const app = express();
const bp = require("body-parser");
var fs = require("fs");
const validate = require('validate.js');
let update = require('update');

app.use(bp.json());

const products = [{
        id: 1,
        title: "a",
        price: 223
    },
    {
        id: 2,
        title: "afd",
        price: 223
    },
    {
        id: 3,
        title: "a",
        price: 433
    },
];
const port = process.env.NODE_ENV ||
    3000;
app.get('/products', (req, res) => {
    res.send(products)
})
app.get('/products/:id', (req, res) => {
    const product = products.find(data => data.id == req.params.id);
    if (!product) res.status(404).send("Not Found");
    res.send(product);
});
app.post('/products', (req, res) => {
    let lastId = products.length;
    let product = {
        id: ++lastId,
        title: req.body.title,
        price: req.body.price
    }
    products.push(product);
    console.log(product)
    res.send(product)
})
app.put('/products/:id', (req, res) => {
    let id = req.params.id;
    let product = products.find(data => data.id == id);
    if (!product) res.status(404).send("not found");
    if (!validate(product)) res.status(404).send("Bad request");
    res.status(200).send(update(product, req.body));

})
app.listen(port, () => {
    console.log(`listen on port ${port}`);
})