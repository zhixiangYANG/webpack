//webpack的配置文件，可以配置入口，出口等一些信息
//这个文件需要暴露一个对象，使用commonjs规范

const path = require("path");

module.exports = {
  //配置选项

  //入口
  entry: "./src/hello.js",

  //出口
  output: {
    //指定出口的文件夹，需要是一个绝对路径
    path: path.resolve(__dirname, "./dist"),
    //打包生成的JS文件的文件名叫什么
    filename: "wodetian.js"
  }
};
