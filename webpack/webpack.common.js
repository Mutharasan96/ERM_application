const path = import('path')
const webpack = import('webpack')
const HTMLWebpackplugin = import('html-webpack-plugin')

// const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: path.resolve(__dirname, '..', './public/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HTMLWebpackplugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
  ],
}
