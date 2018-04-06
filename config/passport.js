const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');

const Staff = mongoose.model('staff');

module.exports = function (passport) {
    
    passport.use(new LocalStrategy(
        function (username, password, done) {console.log("inside pass")
            User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (!user.verifyPassword(password)) { return done(null, false); }
                return done(null, user);
            });
        }
    ));
}