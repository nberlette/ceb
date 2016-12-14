var path = require('path');

module.exports = {
    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.json/, loader: 'json'},
            {test: /bootstrap\.js$/, loader: 'imports?jQuery=jquery'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.less/, loader: 'style!css!less'},
            {test: /\.html/, loader: 'raw'},
            {test: /\.(png|jpg)$/, loader: 'url?limit=25000'}
        ]
    },
    output: {
        library: 'ceb',
        libraryTarget: 'umd'
    },
    resolve: {
        alias: {
            'ceb': path.join(__dirname, 'src/ceb.js')
        }
    }
};
