// vue.config.js
module.exports = {
    devServer: {
        port: 81,
        proxy: "http://192.168.254.200/api",
    }
  }