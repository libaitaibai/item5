// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'jquery'
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import '@/common.css';
import router from './router/router'
// vuex储存
import store from './store'
import axios from 'axios'

Vue.use(ElementUI);

// 获取当前页面路由并且放在this.identity.permissions上
// Vue.prototype.checkPermissions = function (routeName = '') {
//   var noPermissionRouter = ['login'];
//   if (noPermissionRouter.find((n) => n == routeName))
//     return true
//   var userInfo = store.getters.identity
//   var permissions = userInfo.permissions ? userInfo.permissions : [];
//   if (!(permissions.find((n) => n == routeName))) {
//     this.$message({
//       message: '您没有该权限',
//       type: 'warning'
//     });
//     return false
//   }
//   return true
// }

// import { Button, Select } from 'element-ui';
// Vue.use(Button)
// Vue.use(Select)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  render: c => c(App)
})
