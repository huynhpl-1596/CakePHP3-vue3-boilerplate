FROM php:7.4-fpm

# Install selected extensions and other stuff
RUN apt-get update && apt-get install -y libonig-dev libicu-dev libxml2-dev git libzip-dev zip \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/* && \
    docker-php-ext-install mbstring intl simplexml mysqli xml pdo_mysql zip

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

WORKDIR "/var/www/html"
