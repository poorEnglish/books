const errM = require('./middlewares/catcherMW')
const http = require('http');
const catcher = require('./middlewares/catcherMW')
const hello = require('./middlewares/helloMW')
const Koa =  require('koa');
const app = new Koa()

app.use(hello).use(catcher)



http.createServer(app.callback()).listen(3000)
// app.listen(3000);