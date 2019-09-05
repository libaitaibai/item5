
import headview from '@/components/index/headview'

// app
import app from '@/components/issue/app/app'
import applist from '@/components/issue/app/applist'
// theme
import theme from '@/components/issue/theme/theme'
import themelist from '@/components/issue/theme/themelist'

export default [{
  path: 'app',
  name: 'app',
  components: {
    headview,
    main:app
  },
  children:[{
    path: '/',
    name: 'applist',
    component: applist
  }]
},
// db
{
  path: 'theme',
  name: 'theme',
  // redirect:'/',
  components: {
    headview,
    main:theme
  },
  children:[{
    path: '/',
    name: 'themelist',
    component: themelist
  }]
  // {
  //   path: 'api',
  //   name: 'api',
  //   component: api
  // },
  // {
  //     path:'theme',
  //     component:theme,
  //     name:'theme'
  // }]
}]

