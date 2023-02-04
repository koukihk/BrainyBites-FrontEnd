import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import './styles.scss'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import router from './router'


Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
