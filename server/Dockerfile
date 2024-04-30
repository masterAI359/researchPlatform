FROM node:21.1.0-alpine
WORKDIR /server
COPY ./package.json ./
RUN npm i
COPY . . 
CMD ["npm", "start"]