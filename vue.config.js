module.exports = {
  publicPath: "/", //打包运行环境的根路径 如果是/demo 那么浏览器的访问地址后会多一个demo
  devServer: {
    // 开发调试服务器配置项
    open: true, // npm run serve后自动打开页面
    host: "127.0.0.1", // 匹配本机IP地址
    port: 9009, // 开发服务器运行端口号
    compress: true // 启用静态资源压缩算法
  }
};