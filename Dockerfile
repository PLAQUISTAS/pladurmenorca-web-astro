# ── Stage 1: Build ────────────────────────────────────────
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# ── Stage 2: Production (nginx + node via supervisor) ────
FROM node:22-alpine

RUN apk add --no-cache nginx supervisor

# Nginx config
COPY nginx.conf /etc/nginx/http.d/default.conf
RUN rm -f /etc/nginx/http.d/default.conf.bak

# Supervisor config
COPY supervisord.conf /etc/supervisord.conf

# Static files for nginx
COPY --from=build /app/dist/client /app/dist/client

# Server files for Node.js
COPY --from=build /app/dist/server /app/dist/server
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=127.0.0.1
ENV PORT=4321

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=45s --retries=5 \
  CMD node -e "require('net').createConnection(4321,'localhost').on('connect',function(){process.exit(0)}).on('error',function(){process.exit(1)})"

CMD ["supervisord", "-c", "/etc/supervisord.conf"]
