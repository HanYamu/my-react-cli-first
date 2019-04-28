const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入打包的html模板
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //引入css文件分离
const CopyWebpackPlugin = require("copy-webpack-plugin"); //复制静态文件夹
const HappyPack = require('happypack'); // happypack webpack多线程打包;

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname,'dist') ,  
    publicPath: "/",
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
        use: ['happypack/loader?id=js'], // 将对.js文件的处理转交给id为babel的HappyPack的实列
        exclude:/node_modules/,
        // use:{ // 未使用happypack时的写法
        //     loader:'babel-loader',
        //     options: { cacheDirectory: true } // babel-loader在执行的时候，可能会产生一些运行期间重复的公共文件，造成代码体积大冗余，同时也会减慢编译效率可以加上cacheDirectory参数
        // },
      },
      {
        test:/\.css$/,
        exclude:/node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?module"
        }),
      },
      {
        test: /\.less$/,
        use:ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "less-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      { //图片 loader
        test:/\.(png|jpg|gif|jpeg)$/, //是匹配图片文件后缀名称
        loader:'url-loader', //是指定使用的loader和loader的配置参数
        options:{
          limit: 10, //是把小于500B的文件打成Base64的格式，写入JS
          outputPath: 'img/',
          name:'[name].[hash:6].[ext]', //打包后的图片放到文件夹下
        },
      },
      {
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  devServer: {
    publicPath: '/', //
    contentBase: path.resolve(__dirname, "dist"), //此处的路径必须和输出output文件的路径一致 否则无法自动更新，或者是基于output的相对路径
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    compress: true,
    host: "localhost",
    port: 9090,
    // headers: { // 允许开发服务器访问本地服务器的包JSON文件，防止跨域
    //     'Access-Control-Allow-Origin': '*'
    // },
    // hot: true, // 设置热替换
    proxy: {
      "/api/*": "http://localhost:8090/$1"
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {from: "./dll", to: "dll"}   // 把第三方库打包的dll引入进来
    ]),
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
    new ExtractTextPlugin("css/index.css"),  //这里的/css/index.css 是分离后的路径
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./dll/manifest.vendors.json"),
      // name: 'vendors',
    }),
    new HappyPack({
      // 用唯一的标识符id来代表当前的HappyPack 处理一类特定的文件
      id: 'js',
      // 如何处理.js文件，用法和Loader配置是一样的
      loaders: ['babel-loader']
    })
  ]
};

module.exports = devConfig;