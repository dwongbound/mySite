FROM node:16

WORKDIR /hasura-relay-test

COPY package.json .

RUN npm update

RUN npm install

COPY . .

EXPOSE 3000

COPY tsconfig.json .

CMD npm start