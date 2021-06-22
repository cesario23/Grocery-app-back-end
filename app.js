var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/express-mongodb-intro", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`MONGO DB CONNECTED`);
  })
  .catch(function (e) {
    console.log(e);
  });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const shopRouter = require("./routes/shopRouter");

var app = express();

// view engine setup
app.set("view engine", "jade");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/shop', shopRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({message: "error", error: err});
});

module.exports = app;
