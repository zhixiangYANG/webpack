const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueWebpackPlugin = require("vue-loader/lib/plugin");

module.exports = {
  //入口
  // entry: "./src/pages/film/index.js",

  //多入口
  entry: {
    film: "./src/pages/film/index.js",
    cinema: "./src/pages/cinema/index.js"
  },

  //出口
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },

  //模块转换器规则
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "file-loader"
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  },

  //插件使用
  plugins: [
    //首页
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["film"],
      template: path.resolve(__dirname, "./public/index.html")
    }),

    //影院列表页
    new HtmlWebpackPlugin({
      filename: "cinema.html",
      chunks: ["cinema"],
      template: path.resolve(__dirname, "./public/cinema.html")
    }),

    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./public")
      }
    ]),

    new VueWebpackPlugin()
  ],

  //针对webpack-dev-server的配置
  devServer: {
    port: 9090,
    contentBase: path.resolve(__dirname, "./dist")
  }
};
