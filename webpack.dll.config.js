const webpack = require('webpack');
let path = require("path");

let vendors = [
  "react",
  "react-dom",
  "react-router-dom",
];

module.exports = {
  resolve: {
		extensions: [".js", ".jsx"]
	},
  output: {
    path: path.join(__dirname, 'dll'),
    filename: '[name].js',
    /**
     * output.library
     * 将会定义为 window.${output.library}
     * 在这次的例子中，将会定义为`window.vendor_library`
     */
    library: '[name]',
  },
  entry: { vendors: vendors },
  plugins: [
    new webpack.DllPlugin({
      /**
       * path
       * 定义 manifest 文件生成的位置
       * [name]的部分由entry的名字替换
       */
      path: path.join(__dirname, 'dll', 'manifest.[name].json'),
      /**
       * name
       * dll bundle 输出到那个全局变量上
       * 和 output.library 一样即可。
       */
      name: '[name]',
      // context: __dirname, // 绝对路径
    }),
  ],
  // webpack.DllPlugin的选项中，path是manifest文件的输出路径；name是dll暴露的对象名，
  // 要跟output.library保持一致；context是解析包路径的上下文，这个要跟接下来配置的dll user一致。
};