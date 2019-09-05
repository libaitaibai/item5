
import headview from '@/components/index/headview'

// 资源数据
import resource from '@/components/resource/resource'


export default [{
  path: 'list',
  name: 'resource',
  components: {
    headview,
    main: resource
  }
}]
