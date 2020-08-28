const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const EmployeeSchema = {
  name: {type: String, required: true},
  occupation: {type: String, required: true},
  department: {type: String, required: true},
  salary: {type: Number, required: true}
};

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;