const path = require('path');

module.exports = {
    entry: "./server.js",
    output: {
        path: path.resolve(__dirname),
        filename: "__bundle.js",
        resolve: {
            extensions: ['.js', '.jsx']  //Working
          }
    }
}