const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入打包的html模板
const extractTextPlugin = require('extract-text-webpack-plugin'); //引入css文件分离
const CleanWebpackPlugin = require('clean-webpack-plugin'); //引入清除文件插件

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname,'dist') ,  
    // publicPath: path.join(__dirname, "./dist"),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: { // 配置项目文件别名
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'utils': resolve('src/utils'),
    }
  },
  module: {
    rules: [
      {
        test:/\.(jsx|js)$/,
        exclude:/node_modules/,
        use:{
            loader:'babel-loader',
        },
      },
      {
        test:/\.css$/,
        exclude:/node_modules/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
      },
      {
        test: /\.less$/,
        exclude:/node_modules/,
        use:extractTextPlugin.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "less-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      //图片 loader
      {
        test:/\.(png|jpg|gif|jpeg)$/,  //是匹配图片文件后缀名称
        exclude:/node_modules/,
        use:[
          {
            loader:'url-loader', //是指定使用的loader和loader的配置参数
            options:{
                limit:20,  //是把小于500B的文件打成Base64的格式，写入JS
                outputPath:'img/',  //打包后的图片放到images文件夹下
                name:'[name].[hash:6].[ext]',  //打包后的图片放到文件夹下
            }
          }
        ]
      },
      {
        test: /\.(htm|html)$/i,
        exclude:/node_modules/,
        use:[ 'html-withimg-loader'] 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'), //指定要打包的html路径和文件名
      favicon:path.join(__dirname, './public/favicon.ico'), //给生成的 html 文件生成一个标签<link rel="shortcut icon" href="apple-touch-icon.png">
      hash: true, //给生成的 js 文件一个独特的 hash 值 <script type=text/javascript src=bundle.js?22b9692e22e7be37b57e></script>
      showErrors:true, //webpack 编译出现错误
      minify:{ //对 html 文件进行压缩，minify 的属性值是一个压缩选项或者 false 。默认值为false, 不对生成的 html 文件进行压缩
        removeComments:true, // 去除注释
        collapseWhitespace: true //是否去除空格
      }
    }),
    new CleanWebpackPlugin(['dist']), //清除之前可能存在的dist目录
    new extractTextPlugin("css/index.css"),  //这里的/css/index.css 是分离后的路径
  ]
};

module.exports = devConfig;