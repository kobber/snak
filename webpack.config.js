var path = require('path');
var webpack = require('webpack');

module.exports = function () {
  return {
	cache: true,
    entry: {
      app: './src/app.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/')
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: [{
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
          ]
        }
      ]
    },
    devServer: {
      overlay: {
        warnings: false,
        errors: true
      },
      contentBase: path.join(__dirname, "dist"),
      port: 3000
    },
    plugins: [
    ]
  }
};
