#syntax=docker/dockerfile:1

FROM node:16-alpine

RUN apk add --no-cache python3

WORKDIR /app

COPY . .

WORKDIR '/app/Front End/masters-thesis'
RUN ls
RUN yarn
RUN yarn build

WORKDIR '/app/Back End'
RUN yarn

CMD [ "node", "index.js" ]
