const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env = {}) => ({
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
              presets: ['babel-preset-react', 'babel-preset-env'],
              plugins: ['react-hot-loader/babel', 'babel-plugin-transform-decorators-legacy'],
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
    // index: '',
    // proxy: {
    //   '/': 'http://localhost:3000',
    // },
    contentBase: __dirname,
    hot: true,
  },
})
