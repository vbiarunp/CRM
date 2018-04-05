const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./models/staff');
const routes = require('./routes');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const passport =require('passport');
require('./config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.listen(5000);