var Dockerode = require('dockerode');
var DockerEvents = require('docker-events');

var options = {
    socketPath: '/var/run/docker.sock'
};

var emitter = new DockerEvents({
    docker: new Dockerode(options),
});

emitter.start();

emitter.on("start", function(message) {
    console.log("container started: %j", message);
});
