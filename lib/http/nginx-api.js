var request = require('request');
var manager = require('../docker/manager');

exports.post = function(hosts, container) {
    var payload = this.populatePayload(hosts, container);
    console.log("POSTing:");
    console.log(payload);
    request.post({ url: 'http://nginxApi:1337/virtualhost', body: payload, json: true }, function(err,httpResponse, body) {
        if (err) {
            console.log("Result: %s", err);
        }

        console.log("Result:");
        console.log(body);
    });
}

exports.populatePayload = function(hosts, container) {
    // console.log(container);
    var ip = container.NetworkSettings.IPAddress;

    if (ip === undefined || hosts === undefined) {
        return [];
    }

    console.log(ip);
    console.log(hosts);
    var virtualHosts = [];
    var payload = {
        name: hosts[0],
        portsPlain: "80",
        locations: {
            path: "/",
            backends: [
                {
                    ip: ip,
                    ports: "80",
                }
            ]
        }
    }

    virtualHosts.push(payload);

    return virtualHosts;
}
