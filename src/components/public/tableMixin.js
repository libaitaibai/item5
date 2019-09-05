import {fetchLists} from '@/request/axios/commRequest'

// 引入axios的请求数据给表格
var TableMixin = {
  data () {
    return {
      url: '',
      CreatURL: '',
      OpenphopURL:'',
      ViewURL: '',
      filters: {},
      tableData: [],
      page: 1,
      pageSize: 10
    }
  },
  methods: {
    // 创建
    cread: function () {
      this.$router.push({name: this.CreatURL})
      console.log('点击创建')
    },
    // 编辑
    redact: function (id) {
      this.$router.push({name: this.ViewURL, params: {id}})
      console.log('点击编辑' +id)
    },
    // 是否删除
    operaDelate: function (id, index) {
      // element-ui的弹框
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.Delate(id, index)
        }).catch(() => {
        this.$message({
        type: 'info',
        message: '已取消删除'
        });          
      })
    },
    // 删除
    Delate: function (id, index) {
      console.log('删除了')
      this.$message({
        type: 'success',
        message: '删除成功!'
      });
    },
    // 搜索
    getList: function () {
      console.log('搜索')
      var ths = this
      var params = ths.getParams()
      console.log('res', '+++', ths.url, '+++',params)
      fetchLists(ths.url, params).then((res) => {
        console.log('res', '+++', ths.url, '+++', params)
        console.log(res)
      }).catch((err) => {
        console.log('err')
        console.log(err)
      })
    },
    // 设置params
    getParams: function () {
      // Object.assign是把后面对象都放在全面对象并且覆盖前一个对象内相同的
      console.log('设置params')
      return Object.assign({}, this.filters, {
        page: this.page,
        pageSize: this.pageSize,
      })
    },
    // 重置
    clearFilters: function () {
      console.log('重置')
    },
    // 打开摄像头
    openphop: function () {
      this.$router.push({name: this.OpenphopURL})
      console.log("打开摄像头")
    }
  }
}
export default TableMixin
