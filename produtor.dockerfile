FROM node:16.13.1

WORKDIR /produtor

COPY /produtor package.json

COPY /produtor package-lock.json

COPY /produtor tsconfig.json

COPY /produtor ./

RUN npm install

CMD [ "npm" , "start" ]

EXPOSE 3001