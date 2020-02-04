const mode = 'development';
const watch = true;

module.exports = {
    mode: mode,
    watch: watch,
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
