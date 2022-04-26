const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName: { 
        type: String,
        minlength: [
            3,
            'The name must be three characters in length'
        ],
        required: [
            true,
            'Name of author is required'
        ]
    },

}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
