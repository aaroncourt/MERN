const ProductController = require('../controllers/Product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.findAllProducts)
    app.post('/api/products', ProductController.createProduct) ;
};