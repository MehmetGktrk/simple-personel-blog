const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const databaseMiddleware = require('./middlewares/databaseMiddleware');
const timeMiddleware = require('./middlewares/timeMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');


const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');







const app = express();


app.use(cors());

app.use(bodyParser.json());

app.use(databaseMiddleware);
app.use(timeMiddleware);


app.use('/auth', authRoutes);
app.use('/post', authMiddleware, postRoutes); 


module.exports = app;