<template>
    <div id="apicreatd">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="名称" prop="name" required>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="请求地址" prop="address" required>
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="请求方式">
          <el-radio-group v-model="ruleForm.requestMethod" required>
            <el-radio label="GET"></el-radio>
            <el-radio label="POST"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="标签">
          <el-select v-model="ruleForm.labels" placeholder="请选择">
            <!-- <el-option v-for="item in rulesoption" :label="item.option" :value="item.value"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="请求参数" prop="params">
          <template>
          <el-table
          :data="ruleForm.params"
          border
          style="width: 100%">
          <el-table-column
            label="参数名">
            <template slot-scope="scope">
              <el-input v-model="scope.row.key"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            label="参数类型">
            <template slot-scope="scope">
              <el-select v-model="scope.row.type" placeholder="请选择">
                  <el-option label="字符型" value="string"></el-option>
							    <el-option label="数字" value="numeric"></el-option>
							    <el-option label="日期" value="date"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            label="是否必填">
            <template slot-scope="scope">
              <el-form-item label="">
                <el-radio v-model="scope.row.isRequire" label="0">非必填</el-radio>
                <el-radio v-model="scope.row.isRequire" label="1">必填</el-radio>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            label="描述">
            <template slot-scope="scope">
              <el-input v-model="scope.row.desc"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button type="danger" @click="delect(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
          </el-table>
        </template>
        </el-form-item>
        <el-form-item label="" required>
            <a href="javascirpt:void(0)" @click="addparams">添加参数</a>
        </el-form-item>
        <el-form-item label="API描述">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="API详情描述"
            v-model="ruleForm.textarea">
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="success" @click="created">创建</el-button>
          <el-button>返回</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
export default {
  name: 'apicreatd',
  data () {
    return {
      ruleForm: {
        name: '',
        address: '',
        requestMethod: 'GET',
        labels: '',
        params: [],
        textarea: '',
      },
      tableData: [],
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' },
          {type: 'url', message: '请输入地址正确', trigger: 'blur'},
          {}
        ],
        params: []
      }
    }
  },
  methods: {
    created () {
      this.$refs['ruleForm'].validate((valid,err) => {
        if (valid) {
          console.log("创建")
          console.log(this)
            // this.submit()
        } else {
          console.log("失败")
            // this.submitError(msg)
        }
      })
    },
    // 添加表格行
    addparams () {
      // console.log('添加表格行')
      if(!Array.isArray(this.ruleForm.params)) {
        // console.log('添加表格行')
        this.ruleForm.params = []
      }
      this.ruleForm.params.push({key:'',isRequire:'1',desc:''})
      console.log(this.ruleForm.params)
    },
    // 删除表格行
    delect(index){
      console.log('删除表格行')
      this.ruleForm.params.splice(index,1)
    }
  }
}
</script>
<style scoped>
  #apicreatd{
    padding:20px 0 0 20px;
  }
a{
  text-decoration: none;
}
</style>
