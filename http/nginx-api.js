var request = require('request');
var manager = require('../docker/manager');

exports.postHost = function(dockerMessage) {
    var container = manager
        .getContainer(dockerMessage.id)
    ;

    if (container !== undefined) {
        var data = container.inspect(function (err, data) {
            var env = data.Config.Env;

            for (i in env) {
                console.log(env[i]);
            }
        });
    }
}
