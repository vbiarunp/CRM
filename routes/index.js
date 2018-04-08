const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const passport =require('passport');

module.exports = (app) => {
    app.post('/api/login', (req, res, next) => {
        passport.authenticate('local', function(err, user, info){
            res.send(user);
        })(req, res, next);
    });
}
