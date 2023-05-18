import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // element-ui
import VueResource from 'vue-resource' // 发送ajax
import VueRouter from 'vue-router'
import router from './router/index'
Vue.config.productionTip = false 
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
