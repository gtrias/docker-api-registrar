var request = require('request');

exports.postHost = function(dockerMessage) {
    conatinerInfo = JSON.parse(dockerMessage);

    request
        .post('http://nginxApi/virtualhost')
        .form()
    ;
}
