var bs = require('browser-sync').create();
var jsonServer = require('json-server');

var server = jsonServer.create();
server.use(jsonServer.defaults());
server.use(jsonServer.router('src/db.json'));

bs.init({
    ui: false,
    files: './public',
    open: false,
    notify: false,
    server: {
        baseDir: './public'
    }
}, function (err, bs) {
    bs.app.use('/api', server);
});
