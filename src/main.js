import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(ElementUI);

const bus = new Vue()
Vue.prototype.$bus = bus;

new Vue({
  render: h => h(App),
}).$mount('#app')
