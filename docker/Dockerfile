############################
FROM node:24-alpine AS build

RUN apk add git && \
    git clone https://github.com/59n/discord-pushover-selfbot.git /app && \
    yarn install --cwd=/app && \
    rm -rf \
      /app/.git \
      /app/.gitignore \
      /app/README.md \
      /app/package-lock.json \
      /app/package.json \
      /app/yarn.lock

COPY entrypoint.sh /entrypoint.sh

RUN chown -R nobody:nobody /app /entrypoint.sh && \
    chmod -R 500 /entrypoint.sh /app

###################
FROM node:24-alpine

COPY --from=build /app /app
COPY --from=build /entrypoint.sh /entrypoint.sh

USER nobody

ENTRYPOINT ["node", "/app/client.js"]
