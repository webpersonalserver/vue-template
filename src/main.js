import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入axios
import axios from 'axios';

// 注入Element
Vue.use(ElementUI);
// 注入axios
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
