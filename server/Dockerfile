FROM node:16-slim AS base 

RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /usr/app
COPY package.json yarn.lock ./
COPY prisma/schema.prisma ./prisma/schema.prisma

FROM base AS dependencies
# RUN yarn install --production --no-lockfile
# RUN cp -R node_modules prod_node_modules
RUN yarn install
RUN cp -R node_modules prod_node_modules
RUN cp -R prisma prisma-prod

FROM dependencies AS audit
COPY . .
# RUN yarn lint:fix && yarn prettier && yarn test

FROM base AS release
COPY --from=dependencies /usr/app/prod_node_modules ./node_modules
COPY --from=dependencies /usr/app/prisma-prod ./prisma
RUN yarn prisma:generate --schema=./prisma/schema.prisma
COPY . .
EXPOSE 4000

CMD yarn start:prod