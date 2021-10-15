var cors = require('cors');
var express = require('express');
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/count');
// var todosRouter = require('./routes/todo');

var app = express();
app.use(cors());
app.use('/', indexRouter);
app.use('/count', indexRouter);
// app.use('/todo', todosRouter);
app.listen(4200)
// module.exports = app;

