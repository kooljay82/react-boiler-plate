const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const DotEnv = require('dotenv-webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env) => ({
  mode: 'development',
  entry: ['./src/index.js'],
  devtool: `${env.development ? 'inline-source-map' : 'source-map'}`,
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
    host: '0.0.0.0',
    https: true,
    historyApiFallback: true,
    allowedHosts: 'all',
  },
  plugins: [
    new DotEnv({
      path: `./.env.${env.production ? 'production' : env.staging ? 'staging' : 'development'}`,
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      inject: 'body',
      cache: false,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle-report.html',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: 'bundle-stats.json',
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: `${env.development ? '[name].bundle.js' : '[name].[contenthash].bundle.js'}`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      name: 'chunk-vendors',
    },
  },
});
