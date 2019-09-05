
import headview from '@/components/index/headview'

import infor from '@/components/infor/infor'
// api
import api from '@/components/infor/api/api'
import apilist from '@/components/infor/api/apilist'
import apicreatd from '@/components/infor/api/apicrea'
// import apicreatd from '@/components/infor/api/apicreatd'
import apiview from '@/components/infor/api/apiview'
import apiphop from '@/components/infor/api/apiphop'


// db
import db from '@/components/infor/db/db'
import dblist from '@/components/infor/db/dblist'
import dbview from '@/components/infor/db/dbview'
import dbcreatd from '@/components/infor/db/dbcreatd'

export default [{
  path: 'api',
  name: 'api',
  components: {
    headview,
    main:api
  },
  children:[{
    path: '/',
    name: 'apilist',
    component: apilist
  },
  {
    path:'creatd',
    component:apicreatd,
    name:'apicreatd'
  },
  {
    path:':id',
    component:apiview,
    name:'apiview'
  },
  {
    path:'phop',
    component:apiphop,
    name:'apiphop'
  }]
},
// db
{
  path: 'db',
  name: 'db',
  // redirect:'/',
  components: {
    headview,
    main:db
  },
  children:[{
    path: '/',
    name: 'dblist',
    component: dblist
  },
  {
    path:'creatd',
    component:dbcreatd,
    name:'dbcreatd'
  },
  {
    path:':id',
    component:dbview,
    name:'dbview'
  }]
}]

