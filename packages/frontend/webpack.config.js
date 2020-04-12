const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = () => ({
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    // publicPath: '/public',
    filename: 'index.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-react'],
              plugins: [
                'react-hot-loader/babel',
                'babel-plugin-transform-decorators-legacy',
                'babel-plugin-transform-class-properties',
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(styl|css)$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    public: '10.214.224.118:8080',
    proxy: {
      '/': 'http://localhost:3000',
    },
    contentBase: __dirname,
    hot: true,
  },
})
