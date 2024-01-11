FROM node:alpine

RUN mkdir -p /code && \
  npm install -g typescript

WORKDIR /code

ENTRYPOINT [ "tsc" ]
