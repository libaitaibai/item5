import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import routes from './routes'
Vue.use(VueRouter)

export default new VueRouter({ routes })
// 把routes给vuex就是store内的routes
store.commit('setRoutes', routes)
