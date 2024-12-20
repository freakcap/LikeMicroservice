FROM docker.io/node:23-alpine

WORKDIR /usr/app

COPY ./package.json .

RUN npm i

COPY . .

CMD [ "npm", "run", "start" ]
