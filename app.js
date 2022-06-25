const express = require('express');
const indexRouter = require('./routes/index');
const employeeRouter = require('./routes/employee');
const adminRouter = require('./routes/admin');
const newConnection = require('./lib/mySqlDb');

const app = express();
const path = require('path');



//middleware
app.use('/', indexRouter);
app.use('/employee', employeeRouter);
app.use('/admin', adminRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

newConnection.connect((err) => {
    try {
        console.log('Database is now connected')
    } catch (err) {
        console.log(err)
    }
});

//
app.listen(process.env.PORT || 5000);