
import index from '@/components/index/index'

// children的
import info from '@/router/info'
import iss from '@/router/iss'
import jdc from '@/router/jdc'
import resou from '@/router/resou'
// 
import login from '@/components/login/login'
const routes=[
    // 数据管理information
    {
      path: '/info',
      name: 'info',
      component: index,
      children: info
    },
    // 发布管理issue
    {
      path: '/issue',
      name: 'issue',
      component: index,
      children: iss
    },
    // 权限管理jurisdiction
    {
      path: '/jdct',
      name: 'jdct',
      component: index,
      children: jdc
    },
    // 资源管理resource
    {
      path: '/resource',
      name: 'resource',
      component: index,
      children: resou
    },
    // 登录login
    {
      path: '/u/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      redirect: '/info/api'
    }
  ]
  export default routes