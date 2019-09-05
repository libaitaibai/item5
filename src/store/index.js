import Vue from 'vue'
import Vuex from 'vuex'

import Routers from './info/routers'
import userinfo from './info/userinfo'
Vue.use(Vuex)

const store = new Vuex.Store({
    // 模板放的都是其他vuex文件
    modules: {
        Routers: Routers,
        userinfo: userinfo
    }
})
export default store