FROM node:lts-alpine as build
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
#CMD ["npm", "run", "start"]
CMD [ "http-server", "dist" ]
