FROM node

MAINTAINER Genar <genar@acs.li>

COPY . /app
WORKDIR /app

ENTRYPOINT node app.js
