FROM node:14-alpine

WORKDIR /app/saketh_server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
