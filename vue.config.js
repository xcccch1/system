const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/proxy': {
                target: 'http://127.0.0.1:8888/api/private/v1/',
                pathRewrite: { "^/proxy": "" },
                changOrigin: true
            }
        }
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {// 为生产环境修改配置...
          config.plugins.push(new BundleAnalyzerPlugin())
          config.mode = 'production';
          config["performance"] = {//打包文件大小配置
            "maxEntrypointSize": 10000000,
            "maxAssetSize": 30000000
          }
        }
      }
})