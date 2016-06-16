var NginxApi = require('../../lib/http/nginx-api.js');
var chai = require('chai');
var expect = require('chai').expect;

describe("NginxApi", function(done){
   describe("#populatePayload()", function(){
       it("Should convert container json to valid json payload ready to POST", function(){
           var hosts = {};
           var container = {};

           var payload = NginxApi.populatePayload(hosts, container);
           expect(payload).to.be.undefined;

       });
   });
});
