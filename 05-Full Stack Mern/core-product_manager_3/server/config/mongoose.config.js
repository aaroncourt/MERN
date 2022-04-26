const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crmdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log('Connected to the database'))
    .catch( err => console.log('Something went wrong while connecting to the database', err));