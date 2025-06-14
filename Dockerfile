############################
FROM node:24-alpine AS build

RUN mkdir /app

COPY client.js package.json package-lock.json /app/

RUN cd /app && \
    npm install && \
    rm -rf \
      /app/package-lock.json \
      /app/package.json

RUN chown -R nobody:nobody /app && \
    chmod -R 500 /app

###################
FROM node:24-alpine

COPY --from=build --chown=nobody:nobody --chmod=500 /app /app

USER nobody

ENTRYPOINT ["node", "/app/client.js"]
