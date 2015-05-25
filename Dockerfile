FROM node:0.10

ADD package.json /src/

WORKDIR /src

RUN npm install

ADD . /src
