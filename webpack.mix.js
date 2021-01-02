// webpack.mix.js

let mix = require('laravel-mix');
require('mix-html-builder');

mix
    .postCss("src/app.css", "dist", [
        require("tailwindcss"),
    ])
    .html({
        minify: false
    })
    .browserSync({
        proxy: 'http://0.0.0.0:8081',
        files: [
            'src/**/*'
        ]
    });