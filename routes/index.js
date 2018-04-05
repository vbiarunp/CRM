const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const passport =require('passport');

module.exports = (app) => {
    app.get('/', (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/',
            failureFlash: true
        })(req, res, next);
    });
}
