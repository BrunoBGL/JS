const port = 3003;
const express = require('express');
const bodyParser = require('body-parser');
const dataMock = require('./data-mock');

const app = express();

// app.use('/produtos', (req,res,next)=> {
//     console.log('MID1');
//     next();
// });

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req,res,next)=> {
    res.send(dataMock.getProducts());
});

app.get('/product/:id', (req,res,nex) =>{
    res.send(dataMock.getProduct(req.params.id));
});

app.post('/products', (req,res,nex) => {
    const product = dataMock.saveProduct({
        name: req.body.name,
        price: req.body.price
    });
    res.send(product);
})

app.put('/product/:id', (req,res,nex) => {
    const product = dataMock.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    });
    res.send(product);
})

app.delete('/product/:id', (req,res,next) => {
    res.send(dataMock.deleteProduct(req.params.id));
});

app.listen(port, () => {
    console.log(`listening on port ${port}`); 
});