const AuthorController = require('../controllers/Author.controller');

module.exports = (app) => {
    app.get('/authors', AuthorController.getAllAuthors);
    app.post('/authors/new', AuthorController.createAuthor);
    app.get('/authors/:id', AuthorController.getOneAuthor);
    app.put('/authors/edit/:id', AuthorController.updateAuthor);
    app.delete('/authors/:id', AuthorController.deleteAuthor);
};