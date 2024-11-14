var express = require('express');
var router = express.Router();
const providorsController=require('../contollers/providors')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express4' });
// });

router.get('/',providorsController.list)
router.get('/details/:id',providorsController.details)
router.get('/delete/:id',providorsController.delete)
router.get('/edit/:id',providorsController.edit)
router.post('/update/:id',providorsController.update)

router.get('/add-provider',providorsController.addform)

router.post('/add',providorsController.add)


module.exports = router;
