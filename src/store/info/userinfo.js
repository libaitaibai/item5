
export default {
  state: {
    userinfo: {
      permissions: ["*"]
    }
  },
  // 同步
  mutations: {
    // 接收异步时传的userinfo
    setuserinfo(state,userinfo) {
      state.userinfo = Object.assign({}, state.userinfo, userinfo)
    }
  },
  getters: {
    // identity
    identity: state => {
      var userinfo = state.userinfo;
      if(!userinfo.id) {
        var localuserinfo = window.localStorage.getItem('userinfo');
        // 搜索到没搜索到给他一个null
        localuserinfo = typeof(localuserinfo) == 'undefined' ? null : localuserinfo;
        // 字符串变成对象
        localuserinfo = JSON.parse(localuserinfo || null);
        userinfo = localuserinfo ? localuserinfo : userinfo;
      }
      console.log(userinfo)
      return userinfo
    }
  },
  // 异步
  actions: {
    // 接收登录时传的data
    setuserinfo({commit,state}, userinfo) {
       // 调用mutations下的setuserinfo
      commit('setuserinfo', userinfo);
       //  放在浏览器中存储
      window.localStorage.setItem('userinfo', JSON.stringify(userinfo))
    }
  }
}