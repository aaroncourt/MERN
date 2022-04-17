const mongoose = require('mongoose');

const db = 'authors'

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log('Connected to the database'))
    .catch( err => console.log('Something went wrong while connecting to the database', err));