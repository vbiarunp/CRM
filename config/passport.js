const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');

const Staff = mongoose.model('staff');

module.exports = function (passport) {

    passport.use(new LocalStrategy({
        usernameField: 'useremail'
    }, (email, password, done) => {
        Staff.findOne({
            useremail: email
        })
            .then(res => {
                if (res.password === password) {
                    return done(null, res);
                } else {
                    return done(null, false);
                }
            })
    }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        Staff.findById(id, function (err, user) {
            done(err, user);
        });
    });
}