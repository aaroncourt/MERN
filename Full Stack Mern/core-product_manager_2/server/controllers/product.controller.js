const Product = require('../models/product.model');

module.exports = {

    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => 
                res.json(newProduct))
            .catch(err => {
                res.json({message: 'Something went wrong: ', error: err})
            })
        },

    getAllProducts: (req, res) => {
        Product.find({})
            .then(allProducts => {
                console.log(allProducts)
                res.json(allProducts)
            })
            .catch(err => {
                res.json({message: 'Something went wrong: ', error: err})
            });
    },

    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then(oneProduct => {
                console.log(oneProduct)
                res.json(oneProduct)
            })
            .catch(err => {
                res.json({message: 'Something went wrong: ', error: err})
            });
    }
};
