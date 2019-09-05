
import headview from '@/components/index/headview'

// allocation权限分配
import alloca from '@/components/jdct/alloca/alloca'
import allocalist from '@/components/jdct/alloca/allocalist'
// manage权限管理
import manage from '@/components/jdct/manage/manage'
import managelist from '@/components/jdct/manage/managelist'

export default [{
  path: 'alloca',
  name: 'alloca',
  components: {
    headview,
    main: alloca
  },
  children: [{
    path: '/',
    name: 'allocaliat',
    component: allocalist
  }]
}, {
  path: 'manage',
  name: 'manage',
  components: {
    headview,
    main: manage
  },
  children: [{
    path: '/',
    name: 'managelist',
    component: managelist
  }]
}]
