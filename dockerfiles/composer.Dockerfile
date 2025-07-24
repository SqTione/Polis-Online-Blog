FROM composer:latest

WORKDIR /var/www/api

ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]