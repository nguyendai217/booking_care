FROM node:17-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache python3 py3-pip
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]