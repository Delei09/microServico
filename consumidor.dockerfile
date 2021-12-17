FROM node:16.13.1

WORKDIR /consumidor

COPY /consumidor package.json

COPY /consumidor package-lock.json

COPY /consumidor tsconfig.json

COPY /consumidor ./

RUN npm install

CMD [ "npm" , "start" ]

EXPOSE 3002