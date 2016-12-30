var path = require('path');

module.exports = {
    entry:'./src/app.js',
    output:{
        path:'./static/build',
        filename:'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.(js|jsx$)/,
            exclude: /node_modules/,
            loader: ["babel-loader"],
            query: {
                presets: ["es2015", "stage-0", "react"]
            }
        }]
    },
    resolve:{
        root:[
            path.resolve('./src')
        ]
    }
}