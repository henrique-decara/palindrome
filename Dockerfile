# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /home/node/app
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
COPY package*.json ./
COPY --chown=node:node . .
RUN npm install
EXPOSE 6379
COPY . .
CMD ["node", "index.js"]