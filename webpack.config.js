const HtmlWebpackPlugin = require('html-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const path = require('path');

const mode = 'production';
const watch = true;

module.exports = {
    mode: mode,
    watch: watch,
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                path: 'postcss.config.js',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ],
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                options: {
                    partialDirs: [path.join(__dirname, 'src', 'templates', 'partials')],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/index.hbs',
            minify: {
                collapseWhitespace: true,
            },
        }),
        new SVGSpritemapPlugin('./src/img/icons/*.svg', {
            output: {
                filename: './img/sprite.svg',
                svgo: true,
            },
            sprite: {
                prefix: 'icon-',
            },
        }),
    ],
};
