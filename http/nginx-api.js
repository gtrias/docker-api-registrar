var request = require('request');
var manager = require('../docker/manager');

exports.post = function(hosts) {
    var payload = this.populatePayload(hosts);
    request.post({ url: 'http://nginxApi:1337/virtualhosts', form: payload }, function(err,httpResponse, body) {
        console.log(err);
        console.log(httpResponse);
        console.log(body);
    });
}

exports.populatePayload = function(hosts) {
    var virtualHosts = [];
    for (i in hosts) {
        var host = hosts[i];

        var payload = {
            name: "host",
            portsPlain: "80",
            locations: {
                path: "/",
                backends: [
                    {
                        ip: "123.123.123.123",
                        ports: "80"
                    }
                ]

            }
        }

        virtualHosts.push(payload);
    }

    return virtualHosts;
}
