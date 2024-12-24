const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = (env) => {
  const isProduction = env.production === true
  return {
    entry: './src/client/index.jsx',
    mode: isProduction ? 'production' : 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'script.js'
    },
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
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'app.css'
      })
    ],
    resolve: {
      extensions: ['.tsx', '.js', '.jsx']
    }
  }
}
