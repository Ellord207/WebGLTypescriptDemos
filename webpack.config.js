const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app'),
  },
  resolve: {
    extensions: [ ".ts"]
  },
  module: {
    rules: [
      { test:  /\.ts?$/, loader: "ts-loader"}
    ]
  }
};