import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import router from './router'
import NProgress from 'nprogress';
import share from 'vue-social-share'

import './styles.scss'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import 'nprogress/nprogress.css';
import "vue-social-share/dist/client.css";

Vue.use(ElementUI, { locale });
Vue.use(share);

NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
