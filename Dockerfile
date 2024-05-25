FROM node:22.0.0-alpine

WORKDIR /usr/src/app

COPY package*.json /usr/src/app
RUN npm install -g pnpm
RUN pnpm install

COPY . /usr/src/app/

CMD [ "pnpm", "run", "dev" ]