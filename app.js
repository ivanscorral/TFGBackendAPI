/// IMPORTS ///

let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let morgan = require('morgan');

/// ROUTE IMPORTS ///

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let authRouter = require('./routes/auth');
let actionsRouter = require('./routes/actions');

let app = express();


/// MIDDLEWARE ///
//TODO Improve middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/// ROUTES ///

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/action', actionsRouter);


module.exports = app;
