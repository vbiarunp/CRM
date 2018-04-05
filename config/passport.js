const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');

const Staff = mongoose.model('staff');

module.exports = function(passport){
    passport.use(new LocalStrategy({ passReqToCallback : true,username: 'email'}, (password, done) => {
        console.log("sdf")
    }))
}