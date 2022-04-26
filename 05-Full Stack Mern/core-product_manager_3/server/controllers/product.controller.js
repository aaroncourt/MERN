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
                res.json(allProducts)
            })
            .catch(err => {
                res.json({message: 'Something went wrong: ', error: err})
            });
    },

    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then(oneProduct => {
                res.json(oneProduct)
            })
            .catch(err => {
                res.json({message: 'Something went wrong: ', error: err})
            });
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate( {_id: req.params.id}, req.body, {new: true} )
            .then(updatedProduct => {
                console.log(updatedProduct)
                res.json(updatedProduct)
            })
            .catch(err => {
                res.json({message: 'Something went wrong: ', error: err})
            });
    },

    deleteProduct: (req, res) => {
        Product.deleteOne( {_id: req.params.id} )
            .then(deleteConfirmation => {
                console.log(deleteConfirmation)
                res.json(updatedProduct)
            })
            .catch(err => {
                res.json({message: 'Something went wrong: ', error: err})
            });
    },

};
