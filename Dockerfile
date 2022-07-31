FROM node:16

WORKDIR /farmyou_admin/
COPY . /farmyou_admin/

RUN yarn install
RUN yarn build
CMD yarn start