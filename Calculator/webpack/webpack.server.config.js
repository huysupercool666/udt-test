const path = require('path')
const externals = require('webpack-node-externals')
module.exports = (env) => {
  const isProduction = env.production === true
  return {
    target: 'node',
    entry: './src/server/index.jsx',
    mode: isProduction ? 'production' : 'development',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'server.js'
    },
    externals: [externals()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          use: ['css-loader', 'sass-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    node: {
      __dirname: false
    }
  }
}
