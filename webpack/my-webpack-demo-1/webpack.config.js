const path = require('path'); // node.js 的路径模块
const miniSVGDataURI = require("mini-svg-data-uri");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'), 
    open: true, // 开启服务器时，自动打开页面
    compress: true, // 开启 gzip 压缩
    port: 9000, // 自定义端口号
    publicPath: '/'
  },
  // devtool: 'nosources-source-map',
  // entry: './src/index.js', // 入口文件（简写形式）
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包后的路径
    filename: 'bundle.js', // 打包后的文件名
    assetModuleFilename: "assets/[name]_[hash][ext]"
  },
  module: {
    rules: [
      {
        test: /\.sc?ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              modules: true, // 默认是 false ***
            },
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: "asset",
        generator: {
          filename: "images/[name]_[hash][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        }
      },
      {
        test: /\.svg$/i,
        type: "asset/inline",
        generator: {
          dataUrl(content) {
            content = content.toString();
            return miniSVGDataURI(content);
          },
        },
      },
      {
        test: /\.(otf|eot|woff2?|ttf|svg)$/,
        type: "asset",
        generator: {
          filename: "fonts/[name]_[hash][ext]"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 这里设置自己模板文件
    }),
  ],
}