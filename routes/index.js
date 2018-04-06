const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const passport =require('passport');

module.exports = (app) => {
    app.get('/api/login', (req, res, next) => {
        console.log("start")
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/'
        })(req, res, next);
    });
}
