const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./',
  pages:{
    index:{
      entry:'src/main.js',
      title:'MMDCCJ的blog',
      template:'public/index.html'
    }
  }
})
