const HtmlWebpackPlugin = require('html-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const path = require('path');

const mode = 'development';
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
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                query: {
                    partialDirs: [path.join(__dirname, 'src', 'templates', 'partials')]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/index.hbs'
        }),
        new SVGSpritemapPlugin('./src/img/icons/*.svg', {
            output: {
                filename: './img/sprite.svg',
                svgo: true
            },
            sprite: {
                prefix: 'icon-'
            }
        })
    ]
};
