const express = require('express');
const adminRouter = express.Router();
const myConnection = require('../lib/mySqlDb');


adminRouter.get('/', (req, res) => {
    let sql = 'SELECT * FROM records'
    let query = myConnection.query(sql, (err, records) => {
        if (err) throw err;
        res.render('admin', { records: records });
      });
});



module.exports = adminRouter;