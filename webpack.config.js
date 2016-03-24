var webpack = require('webpack');
var path = require('path');

var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './src/client/index'
    ],
    resolve: {
        root: [
            // allows us to import modules as if /src was the root.
            // so I can do: import Comment from 'components/Comment'
            // instead of:  import Comment from '../components/Comment' or whatever relative path would be
            path.resolve(__dirname, './src')
        ],
        // allows you to require without the .js at end of filenames
        // import Component from 'component' vs. import Component from 'component.js'
        extensions: ['', '.js', '.json', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
        },
        host: '127.0.0.1'
    }
};

module.exports = config;
