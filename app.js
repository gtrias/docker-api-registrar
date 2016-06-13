var DockerEvents = require('docker-events');
var nginxApi = require('./http/nginx-api');
var dockerManager = require('./docker/manager');

var emitter = new DockerEvents({
    docker: dockerManager.getInstance(),
});

console.log('Listening events');
emitter.start();

emitter.on("start", function(message) {
    nginxApi.postHost(message);
});
