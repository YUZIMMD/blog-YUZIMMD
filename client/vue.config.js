module.exports = {
    devServer: { // 设置代理
        hot: true, //热加载
        host: '0.0.0.0', //ip地址
        port: 8080, //端口
        https: false, //false关闭https，true为开启
        open: true, //自动打开浏览器
        proxy: {
            '/api': { //本地 
                target: 'http://127.0.0.1:3000',
                // 如果要代理 websockets
                ws: true,
                changeOrigin: true
            }
        }
    }
}