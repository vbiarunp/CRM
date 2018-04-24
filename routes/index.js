const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const passport =require('passport');
const jwt = require('jsonwebtoken');
const Staff = mongoose.model('staff');

module.exports = (app) => {
    app.post('/api/login', (req, res, next) => {
        console.log(req.body)
        Staff.findOne({
            useremail: 'admin@gmail.com'
        }).then(user => {
            const token = jwt.sign({
                useremail: 'admin@gmail.com'
            }, 'secret');
            res.json({ token });
        });
    });
}
