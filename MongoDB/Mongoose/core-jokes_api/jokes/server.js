const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllTheJokeRoutes = require('./routes/jokes.routes');
AllTheJokeRoutes(app);

app.listen(8000, () => console.log('The server is connected on Port 8000'));