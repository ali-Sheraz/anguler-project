module.exports.home = function (req, res) {
    res.render('index', { title: 'MEAN STACK' })
}
module.exports.about = function (req, res) {
    res.render('about', { title: 'About' })
}
module.exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact' })
}
module.exports.login = function (req, res) {
    res.render('login', { title: 'Login' })
}
module.exports.register = function (req, res) {
    res.render('register', { title: 'Register' })
}
