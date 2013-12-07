var server;
server = require('./routing/server');
server.listen(process.env.PORT || 3185);
console.log('Listening on port ' + (process.env.PORT || 3185));