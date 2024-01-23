FROM node:lts-alpine as build
RUN npm install -g http-server
WORKDIR /var/www/html/vue3-docker
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
#CMD ["npm", "run", "start"]
CMD [ "http-server", "dist" ]
