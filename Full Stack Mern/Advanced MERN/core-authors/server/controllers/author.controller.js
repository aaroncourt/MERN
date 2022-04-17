const Author = require('../models/Author.model');

module.exports = {

    createAuthor: (req, res) => {
        const {authorName} = req.body;
        Author.create({authorName: authorName})
        .then(newAuthor => 
            res.json(newAuthor))
        .catch(err => {res.status(400).json(err)})
    },    

    getAllAuthors: (req, res) => {
        Author.find({})
            .then(allAuthors => {
                res.json(allAuthors)
            })
            .catch(err => {
                res.json({message: 'Something went wrong: ', error: err})
            });
    },

    getOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(oneAuthor => {
                res.json(oneAuthor)
            })
            .catch(err => {
                res.json({message: 'Something went wrong: ', error: err})
            });
    },

    updateAuthor: (req, res) => {
        Author.findOneAndUpdate( {_id: req.params.id}, req.body, {runValidators: true, new: true})
            .then(updatedAuthor => {
                res.json(updatedAuthor)
            })
            .catch(err => {res.status(400).json(err)})
    },

    deleteAuthor: (req, res) => {
        Author.deleteOne( {_id: req.params.id} )
            .then(deleteConfirmation => {
                res.json(updatedAuthor)
            })
            .catch(err => {
                res.json({message: 'Something went wrong: ', error: err})
            });
    },

};
