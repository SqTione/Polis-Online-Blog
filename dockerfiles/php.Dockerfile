FROM php:8.4-fpm-alpine

WORKDIR /var/www/api

RUN docker-php-ext-install pdo pdo_mysql