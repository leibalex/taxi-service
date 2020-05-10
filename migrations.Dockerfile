FROM node:12-alpine as base

FROM base as builder
RUN apk add make gcc g++ python jq
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
USER node
