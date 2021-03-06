const User = require('./models/User.model');

module.exports = function(app) {
    app.get('/', function(req, res) {
        //res.setHeader('Content-Type', 'text/plain');
        //res.send('Hello me');
        res.render('index');
    });

    app.get('/login', function(req, res) {
        res.render('login');
        req.flash('success', 'test')
    });

    app.get('/register', function(req, res) {
        res.render('register');
    });
    app.post('/register', function(req, res) {

        User.register(
                req.body.lastname,
                req.body.firstname,
                req.body.email,
                req.body.password,
                req.body.confirm_password,
            ).then(() => {
                req.flash('success', 'Inscription réussie ! Vous pouvez maintenant vous connecter.')
                res.redirect('/');
            }).catch(errors => {
                res.render('register', { errors, user: req.body })
            })
            //console.log(req.body);
    });
}