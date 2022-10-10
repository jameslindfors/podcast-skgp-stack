FROM node:16 as builder
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn prisma:generate

FROM node:16.17-alpine3.15

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/ .
COPY --from=builder /app/prisma ./prisma

CMD yarn start:prod