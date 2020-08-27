// eslint-disable-next-line no-undef
module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      error: false,
    },
    proxy: {
      "/api": {
        target: "http://v.juhe.cn/",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  lintOnSave: false,
}
