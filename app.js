const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const passport =require('passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.listen(5000);