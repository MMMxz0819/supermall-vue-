import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from 'components/common/toast'

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false

// 安装使用=>Toast.install
Vue.use(Toast)
// 使用懒加载插件
Vue.use(VueLazyload)

//解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store

}).$mount('#app')
