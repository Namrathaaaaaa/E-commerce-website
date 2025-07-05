FROM node:latest AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci


FROM node:lts-alpine AS production

COPY --from=builder ./app/node_modules ./app/node_modules

COPY . .

CMD ["npm","start"]


