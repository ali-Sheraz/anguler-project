const express = require("express");
const router= express.Router();
const mainController=require('../Contollers/main.contoller')


router.post('/providers',mainController.create)

router.get('/providers',mainController.readAll)
router.get('/providers/:id',mainController.readOne)



router.put('/providers/:id',mainController.update)

router.delete('/providers/:id',mainController.deleteOne)

router.delete('/providers',mainController.deleteAll)
router.post('/providers/login', mainController.login);


router.post('/*',notFound)
router.get('/*',notFound)
router.put('/*',notFound)
router.delete('/*',notFound)
function notFound(req,res)
{
   res.status(400);
   res.send('Not Valid Endpoint')
}

module.exports=router;