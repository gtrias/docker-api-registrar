var Dockerode = require('dockerode');

var options = {
    socketPath: '/var/run/docker.sock'
};

var instance;

exports.getInstance = function () {
    if (instance === undefined) {
        return new Dockerode(options);
    }

    return instance;
}

exports.getContainer = function (containerId) {
    var container = this
        .getInstance()
        .getContainer(containerId)
    ;

    return container;
}
