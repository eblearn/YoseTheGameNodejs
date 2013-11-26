var Alive = require('./src/Alive');

var pingResponse = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.send(new Alive());
 };

module.exports = pingResponse;