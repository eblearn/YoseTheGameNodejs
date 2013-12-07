var request = require("../../../node_modules/request");
var http    = require("http");
var server  = require("../../routing/server");

describe("Landing page compliance", function() {

    it("page exists", function(done) {
        request("http://localhost:3185/", function(error, response, body) {
            expect(response.statusCode).toEqual(200);
            done(); 
        });
    });
   
	it("is of text/html Content-Type", function(done) {
        request("http://localhost:3185/", function(error, response, body) {
            expect(response.headers['content-type']).toContain('text/html;');
            done(); 
        });
    });
});
