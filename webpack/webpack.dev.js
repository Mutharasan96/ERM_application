const webpack = import('webpack')
const ReactRefreshWebpackPlugin = import('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    client: {
      progress: false,
    },
    open: true,
    hot: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('development'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
