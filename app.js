const express = require('express')
const api = require('./api')
const middleware = require('./middleware')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()
app.use(express.static(__dirname + '/public'));
app.use(middleware.cors);
app.use(bodyParser.json());
app.get('/products', api.listProducts)
app.get('/', api.handleRoot);
app.get('/products/:id', api.getProduct);
app.post("/products", api.createProduct);
app.delete("/products/:id", api.deleteProduct);
app.put("/products/:id", api.editProduct);
app.get("/", api.handleRoot);
app.use(middleware.handleError);
app.use(middleware.notFound); 
app.listen(port, () => console.log(`Server listening on port ${port}`))
