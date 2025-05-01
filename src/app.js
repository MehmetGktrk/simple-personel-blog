const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const databaseMiddleware = require('./middlewares/databaseMiddleware');
const timeMiddleware = require('./middlewares/timeMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');


const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const likeRoutes = require('./routes/likeRoutes');
const profileRoutes = require('./routes/profileRoutes');
const followRoutes = require('./routes/followRoutes');






const app = express();


app.use(cors());

app.use(bodyParser.json());

app.use(databaseMiddleware);
app.use(timeMiddleware);


app.use('/auth', authRoutes);
app.use('/post', postRoutes); // authMiddleware in routes
app.use('/like', authMiddleware, likeRoutes);
app.use('/profile', profileRoutes);
app.use('/follow', authMiddleware, followRoutes);

module.exports = app;