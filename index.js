require('dotenv').config();
const cors = require("cors");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const Routes = require('./router')
const bodyParser = require('body-parser');
const passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
// Routes 
app.use('/', Routes);


app.listen(PORT, console.log(`Listening on port ${PORT}.`));