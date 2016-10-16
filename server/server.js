var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./../webpack.config.js');


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
    var indexPathArr = __dirname.split('/');
    indexPathArr.pop();
    res.sendFile(indexPathArr.join('/') + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.emit
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

http.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});