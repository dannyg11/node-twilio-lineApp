var twilio = require('twilio')
  , Hapi;
 
module.exports = function(hapi) {
  Hapi = hapi
  return exports;
};
 
var lineSMS = exports.lineSMS = function(request, reply) {
  var resp = new twilio.TwimlResponse();
  resp.message('Thanks for signing up! We will text you when it\'s your turn to get your book signed!');
  reply(resp.toString()).type('text/xml');
 

};