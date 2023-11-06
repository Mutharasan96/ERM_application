const { merge } = import('webpack-merge')
const commonConfig = import('./webpack.common.js')

module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = import(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
