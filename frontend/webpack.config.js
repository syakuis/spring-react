const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const pkg = require('./package.json')

process.traceDeprecation = true

module.exports = {
  entry: './src/index.js',

  output: {
    path: 'dist',
    publicPath: '',
    filename: '[name].js',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons/commons.js'
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        enforce: 'pre',
        loader: 'eslint-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpg|git)$/,
        use: 'file-loader?name=[hash].[ext]&publicPath=/images/&outputPath=images/'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader?name=[hash].[ext]&publicPath=/fonts/&outputPath=fonts/'
      },
      {
        test: [/\.js$/, /\.jsx$/],
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: [ 'react', ['es2015', {'loose': true}] ]
        }
      }
    ]
  },
  resolve: {
    alias: {
      '_components': path.resolve(__dirname, 'src/components/')
    }
  },

  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 8088,
    host: '0.0.0.0',
    contentBase: 'dist'
  }

}

