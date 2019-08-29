FROM node:slim

WORKDIR /usr/app/src

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["node", "service.js"]

EXPOSE 4040
