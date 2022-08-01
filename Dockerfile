FROM node:16

WORKDIR /FarmYouAdmin/
COPY . /FarmYouAdmin/

RUN yarn install
RUN yarn build
CMD yarn start