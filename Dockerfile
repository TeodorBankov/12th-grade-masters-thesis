#syntax=docker/dockerfile:experimental

FROM python:3.8-slim-buster AS base
WORKDIR /app
COPY requirements.txt requirements.txt
RUN python -m pip install -r requirements.txt

FROM node:16-buster-slim AS client
WORKDIR /app
COPY client .
RUN yarn
RUN yarn build

FROM node:16-buster-slim AS server
WORKDIR /app
COPY server .
RUN yarn

FROM base AS build
WORKDIR /app
COPY --from=client /app client
COPY --from=server /app server

FROM node:16-alpine AS runtime
EXPOSE 3000
COPY --from=build /app /app
WORKDIR /app
RUN apk add gcc g++ python3-dev py3-pip ffmpeg
RUN pip3 install -r requirements.txt
WORKDIR /app/server
ENV DB_PASSWORD=hahano
CMD [ "yarn", "start" ]
