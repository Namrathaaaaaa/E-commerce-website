FROM node:latest AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . . 

RUN npm run build 


FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

COPY . .

EXPOSE 80

CMD ["nginx","-g","daemon off;"]