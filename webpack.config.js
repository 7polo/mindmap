const path = require('path');

module.exports = {
    mode: 'development',
    // entry: {
    //     'bundle': __dirname + '/src/index.js',
    //     'example': __dirname + '/example/demo.js',
    // },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'MindEditor',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            }
        ]
    }
}