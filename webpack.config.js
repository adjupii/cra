const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.js',
  stats: {
    warnings: false,
    children: false
  },
  output: {
    filename: isDev ? '[name].js' : '[name].[contenthash].js',
    publicPath: '/'
  },
  devtool: isDev ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.module\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: isDev
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.(png|svg|pdf)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    modules: [ 'node_modules' ],
    extensions: [ '.js' ],
    alias: {
      '@': path.join(process.cwd(), 'src')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new Dotenv({
      systemvars: true,
      safe: true
    }),
    !isDev && new CopyPlugin({
      patterns: [
        {
          from: 'public/**/*',
          noErrorOnMissing: true,
          globOptions: {
            ignore: [ '**/index.html' ]
          }
        }
      ],
    }),
    isDev && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true
  }
};