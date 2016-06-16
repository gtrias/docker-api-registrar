var request = require('request');
var config = require('config');

exports.post = function(hosts, container) {
    var payload = this.populatePayload(hosts, container);
    console.log("POSTing:");
    console.log(payload);
    request.post({ url: config.get('apiEndpoint') + '/virtualhost', body: payload, json: true }, function(err,httpResponse, body) {
        if (err) {
            console.log("Result: %s", err);
        }

        console.log("Result:");
        console.log(body);
    });
}

exports.populatePayload = function(hosts, container) {
    // console.log(container);

    if (!container.NetworkSettings) {
        return;
    }

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
