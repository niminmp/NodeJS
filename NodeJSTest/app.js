var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

console.log('test***************');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;



/*function placeorder(orderNumber){
  console.log('placed order'+ orderNumber);

  cookAndDeliverFood(function(){

    console.log('cooked and delivered food for order#'+orderNumber);
  })
}

function cookAndDeliverFood(callback){
  setTimeout(callback, 5000);
}


function TestObject(){

  this.name = 'Nimin';
  this.age = 30;
}

var obj = new TestObject();
console.log(obj.name + ' and ' + obj.age);


var importTest = require('./movies');
importTest.movie();

var fs = require('fs');
fs.writeFileSync("corn.txt", "This is my day");
console.log(fs.readFileSync('corn.txt').toString());


console.log(__dirname);*/

/*placeorder(1);
placeorder(2);
placeorder(3);
placeorder(4);*/



