var Hapi = require('hapi');
var routes = require('./routes')(Hapi);
var server = Hapi.createServer('localhost', process.env.PORT || 3000);

server.route([{
  method: 'GET',
  path: '/line/sms',
  handler: routes.lineSMS 
}]);

server.start();


//function (request, reply)