const db = require('../models');
const { rejects } = require('assert');

module.exports = {
  getEmployees: (req, res) => {
    db.Employee.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addEmployee: (req, res) => {
    db.Employee.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};