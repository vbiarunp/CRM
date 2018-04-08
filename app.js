const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { Schema } = mongoose;
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);
require('./models/staff');
const Staff = mongoose.model('staff');
const app = express();



require('./config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret123',
    saveUninitialized: true,
    resave: true
  }));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/index')(app);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('App listening on port ' + port));

