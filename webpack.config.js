const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    app: './assets/app.ts',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // asset, asset/resource, asset/inline
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'public/assets/builds'),
    filename: '[id].js',
    assetModuleFilename: './images/[name][ext]', // 'images/[hash][ext][query]',
  },
  target: 'web',
};
