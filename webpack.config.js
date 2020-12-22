const HtmlWebpackPlugin = require('html-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const path = require('path');

const mode = process.argv[3] && process.argv[3] === 'production' ? 'production' : 'development';
const watch = mode !== 'production';

console.log(`Building webpack in ${mode} mode`);

module.exports = {
    mode: mode,
    watch: watch,
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
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
                        options: { sourceMap: mode !== 'production' },
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
            inject: 'head',
            minify: {
                collapseWhitespace: mode === 'production',
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
