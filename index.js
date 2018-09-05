require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();



app.set('view engine', 'pug');
app.set("views", "./views");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

require("./app/route")(app);
mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`, { useNewUrlParser: true })
    .then(() => {
        app.listen(8080, 'localhost', () => {
            console.info('8080');
        });
    });