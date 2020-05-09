FROM node:12-alpine as base

FROM base as builder
RUN apk add make gcc g++ python jq
COPY package*.json ./
RUN npm install --only=production
RUN mv node_modules node_modules_prod
RUN npm install
COPY . .
RUN npm run build

FROM base
RUN apk add bash openssl
WORKDIR /usr/src/app
COPY --from=builder /dist ./dist
COPY --from=builder /node_modules_prod ./node_modules
USER node
