FROM node:24-alpine

WORKDIR /var/www/web

CMD ["npm", "run", "dev"]