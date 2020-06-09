const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const gameRoute = require('./routes/gameRoute')
const {MONGO_DB_CONNECTION, DEV_PORT} = require('./config');

const app = express();
app.use(cors({origin: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(gameRoute);
app.use(express.static(path.join(__dirname, 'frontend', 'guessmefrontend', 'dist')))
app.get('', (req, res, next) => {
    return res.sendFile(path.join(__dirname + '/frontend/guessmefrontend/dist/index.html'));
});

mongoose.connect(MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    const server = app.listen(process.env.PORT || DEV_PORT);
}).catch(err => {
    console.log(err);
});