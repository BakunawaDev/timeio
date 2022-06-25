const mySqlDb = require('mysql');
const myConnection = mySqlDb.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'timeiodb',
});




module.exports = myConnection;