<template>
    <div id="apilist">
       <div class="search">
          <el-input style="width:200px" v-model="filters.name" placeholder="名称"></el-input>
          <el-input style="width:300px" v-model="filters.address" placeholder="请求地址"></el-input>
          <template>
              <el-select v-model="filters.labels" placeholder="请添加标签">
                <el-option
                  v-for="item in filterslabels"
                  :key="item.index"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
        <el-button type="primary" icon="el-icon-search" @click="getList">搜索</el-button>
        <el-button plain @click="clearFilters">重置</el-button>
       </div>
       <div class="establish">
          <el-button type="success" icon="el-icon-plus" @click="cread">创建</el-button>
      </div>
          <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="ID"
            width="50">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称"
            width="150">
          </el-table-column>
          <el-table-column
            prop="site"
            label="地址"
            width="85">
          </el-table-column>
          <el-table-column
            prop="label"
            label="标签"
            width="85">
          </el-table-column>
          <el-table-column
            prop="founder"
            label="创建人"
            width="150">
          </el-table-column>
          <el-table-column
            prop="date"
            label="创建时间"
            width="220">
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作"
            >
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="redact(scope.row.id)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="operaDelate(scope.row.id,scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      <div class="block">
          <el-pagination
          background
          :page-sizes="[10, 20, 50, 100, 200]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1">
        </el-pagination>
      </div>
      <div>
        <el-button
        size="mini"
        type="danger"
        @click="openphop">打开摄像头</el-button>
      </div>
    </div>
</template>

<script>
import tableMixin from '@/components/public/tableMixin'
export default {
  name: 'apilist',
  mixins: [tableMixin],
  data () {
    return {
      url: '/api',
      value: '',
      CreatURL: 'apicreatd',
      OpenphopURL: 'apiphop',
      ViewURL: 'apiview',
      tableData: [],
      options: [{
        value: '王小虎',
        label: '上海市普陀区金沙江路'
      }, {
        value: '小虎',
        label: '上海市普陀区'
      }, {
        value: '虎',
        label: '1519 弄'
      }, {
        value: '王小',
        label: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    clearFilters () {
      this.filters = {
        labels: []
      }
    }
  },
  // 计算
  computed: {
    filterslabels: function () {
      return this.filters.labels ? this.filters.labels : [];
    }
  }
}
</script>
<style lang="less" scoped>
#apilist{
  padding:40px 45px 0 25px;
  text-align: left;
  .search {
    height:40px;
    .el-input{
      display: inline-block;
    }
    .el-select{
      width:220px;
    }
  }
  .establish{
    margin: 15px 0;
  }
  .block{
    margin-top: 15px;
    height:35px;
    .el-input{
      width:100px;
      height:30px;
    }
    .el-pager{
      width:100px;
      height:30px;
    }
  }
}

</style>