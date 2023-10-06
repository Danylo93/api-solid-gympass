FROM node:18-slim

RUN npm install -g npm@latest --loglevel=error
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --loglevel=error

COPY . .

RUN npm start build --loglevel=error

EXPOSE 3333

CMD [ "npm", "start" ]
