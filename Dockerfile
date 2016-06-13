FROM node

MAINTAINER Genar <genar@acs.li>

COPY . /app
WORKDIR /app

RUN npm install

ENTRYPOINT node app.js
