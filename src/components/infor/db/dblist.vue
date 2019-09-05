<template>
    <div id="dblist">
        <div class="search">
            <el-input style="width:200px" v-model="input" placeholder="名称"></el-input>
            <el-input style="width:300px" v-model="input" placeholder="请求地址"></el-input>
            <template>
                <el-select v-model="value" placeholder="请添加标签">
                <!-- <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option> -->
                </el-select>
            </template>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button plain>重置</el-button>
        </div>
        <div class="establish">
            <el-button type="success" icon="el-icon-plus" @click="createddb">创建</el-button>
        </div>
            <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="tableid"
            label="ID"
            width="50">
            </el-table-column>
            <el-table-column
            prop="name"
            label="名称"
            width="250">
            </el-table-column>
            <el-table-column
            prop="site"
            label="地址"
            style="min-width:50px">
            </el-table-column>
            <el-table-column
            prop="label"
            label="标签"
            >
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
            width="210">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.row.id)">编辑</el-button>
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
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 50, 100, 200]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :hide-on-single-page="value"
            :total="1">
        </el-pagination>

        </div>
    </div>
</template>

<script>
// import apilist from '@/components/infor/infor'
export default {
  name: 'apilist',
  data () {
    return {
    creadurl:'',
    value:'',
    tableData: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
      }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
      }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
      }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    createddb(){
        console.log("db")
    let routeUrl = this.$router.resolve({path: "/share"});
    }
  }
}
</script>
<style lang="less" scoped>
#dblist{
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
