const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')
const appDirectory = path.resolve(__dirname, '../');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
      path.resolve(appDirectory, 'react-router-native'),
    ]
  })

  return config
}