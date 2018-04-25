const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const passport =require('passport');
const jwt = require('jsonwebtoken');
const Staff = mongoose.model('staff');
const Teacher = mongoose.model('teacher');

module.exports = (app) => {
    app.post('/api/login', (req, res, next) => {
        Staff.findOne({
            useremail: 'admin@gmail.com'
        }).then(user => {
            const token = jwt.sign({
                useremail: 'admin@gmail.com'
            }, 'secret');
            res.json({ token });
        });
    });

    app.post('/api/add-teacher', (req, res, next)=> {
        console.log(req.body)
        Teacher.create({
            name: req.body.name,
            qualification: req.body.qualification
        }, (error, resp) => {
        //     console.log(resp)
            res.json({
                status: "success"
            });
        });
    });
}
