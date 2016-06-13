# docker-api-registrar [![Build status][build svg]][build status]

Autoregister docker containers to [nginx-config-api]

## How it works

It will listen for docker events and autoregister the containers having
`VIRTUAL_HOST` environment variable to nginx-config-api

## Run using docker

```bash
docker run -d -v /var/run/docker.sock:/var/run/docker.sock --name docker-api-registar gtrias/docker-api-registar
```

Note: You shoul mount the docker.sock as a volume in order to listen docker events.

[build status]: https://travis-ci.org/gtrias/docker-api-registrar
[build svg]: https://travis-ci.org/gtrias/docker-api-registrar.svg?branch=master
[nginx-config-api]: https://github.com/gtrias/nginx-config-api
