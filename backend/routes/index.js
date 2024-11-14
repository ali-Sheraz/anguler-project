var express = require('express');
var router = express.Router();
const mainController=require('../contollers/main')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express4' });
// });

router.get('/',mainController.home)
router.get('/about',mainController.about)
router.get('/contact',mainController.contact)
router.get('/register',mainController.register)
router.get('/login',mainController.login)

module.exports = router;
