var express = require('express')
    , config = require('./config')
    , logger = require('morgan')
    , routes = require('./app/routes/index.js')
    , generator = require('./app/routes/generator.js')
    ;

var app = express();
var port = config[app.get('env')].port

app.use(logger('dev'));

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/app'));

app.get('/', routes);
app.get('/generator', generator.home);

app.listen(port, function () {
    console.log('listening on http://localhost:%s', port);
})