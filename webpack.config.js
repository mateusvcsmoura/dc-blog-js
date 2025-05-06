const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js',
        login: './src/js/login.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // saída
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Babel
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/, // CSS
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html', // de onde vem o HTML base
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/login.html', // de onde vem o HTML base
            chunks: ['login']
        }),
    ],
    devServer: {
        static: [
            {
                directory: path.resolve(__dirname, 'dist'), // para os arquivos gerados
            },
            {
                directory: path.resolve(__dirname, 'public'), // para arquivos como login.html
            },
        ],
        open: true,
        port: 8080,
    }
};
