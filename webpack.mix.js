const mix = require('laravel-mix');

mix.setPublicPath('./webroot')
    .js('resource/js/app.js', 'webroot/js').vue()
    .sass('resource/sass/app.scss', 'webroot/css')
    .version();
