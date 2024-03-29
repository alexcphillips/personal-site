FROM node:latest

WORKDIR /app

COPY . .

RUN npm install -g npm@8.3.2
RUN npm install


EXPOSE 3000
EXPOSE 3001

CMD [ "node", "server/index" ]
