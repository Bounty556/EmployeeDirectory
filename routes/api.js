const express = require('express');
const router = express.Router();
const employeeController = require('../controllers').employeeController;

router.get('/employees', employeeController.getEmployees);
router.put('/addEmployee', employeeController.addEmployee);

module.exports = router;