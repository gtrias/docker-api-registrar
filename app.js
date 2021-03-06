var DockerEvents = require('docker-events');
var nginxApi = require('./lib/http/nginx-api');
var manager = require('./lib/docker/manager');

var emitter = new DockerEvents({
    docker: manager.getInstance(),
});

console.log('Listening events');
emitter.start();

emitter.on("start", function(message) {

    var container = manager
        .getContainer(message.id)
    ;

    if (container !== undefined) {
        var data = container.inspect(function (err, data) {
            var env = data.Config.Env;

            var virtualHosts = [];

            for (i in env) {
                res = env[i].split("=");

                if (res[0] === 'VIRTUAL_HOST') {
                    virtualHosts.push(res[1]);
                }
            }
            console.log('Registering host %s', virtualHosts);

            nginxApi.post(virtualHosts, data);
        });

    }
});
