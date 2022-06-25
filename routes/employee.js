const express = require('express');
const employeeRouter = express.Router();



employeeRouter.get('/', (req, res) => {
    res.render('employee')
})



module.exports = employeeRouter