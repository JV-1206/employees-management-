const express = require('express');
const router = express.Router();

// Create a controller module

const employeesCtrl = require('../controllers/employees');

//GET ROUTES (use get functions from the controller)

router.get('/', employeesCtrl.index);
router.get('/new', employeesCtrl.new);
router.get('/edit/:id', employeesCtrl.edit)
router.get('/:id', employeesCtrl.show);
// //ACTION ROUTES (use action functions from the controller)

router.post('/', employeesCtrl.create);
router.put('/:id', employeesCtrl.update)
router.delete('/:id', employeesCtrl.delete)


module.exports = router;


