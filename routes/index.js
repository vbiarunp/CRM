const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const passport =require('passport');

module.exports = (app) => {
    app.post('/api/login', (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/api/login',
            failureRedirect: '/'
        })(req, res, next);
    });
    app.get('/api/login', (req, res)=>{
        console.log(req.user)
    })
}
