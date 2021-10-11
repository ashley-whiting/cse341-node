const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    console.log(req.session.isLoggedIn);
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false

    });
};

exports.postLogin = (req, res, next) => {
    User.findById('615e15e1281b388598282aa3')
    .then(user => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save((err) => {
            console.log(err);
            res.redirect('/');
        });
        
    })
    .catch(err => console.log(err));
 
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(() => {
        //console.log(err);
        res.redirect('/');
    });
 
};

