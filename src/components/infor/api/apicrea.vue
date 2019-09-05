<template>
    <div id="apicrea">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="名称" prop="name" required>
                <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="请求地址" prop="requiredUrl" required>
                <el-input v-model="ruleForm.requiredUrl" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="请求方式" prop="" required>
                <el-radio-group v-model="ruleForm.requiredMethod">
                    <el-radio label="GET"></el-radio>
                    <el-radio label="POST"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="标签">
                <el-select v-model="ruleForm.options" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="请求参数" prop="params">
                <el-table :data="ruleForm.params" border style="width: 100%">
                <el-table-column label="参数名">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.data" autocomplete="off"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="参数类型">
                    <template slot-scope="scope">
                        <el-select v-model="scope.row.type" placeholder="参数类型">
                            <el-option label="字符串" value="string"></el-option>
                            <el-option label="数字" value="num"></el-option>
                            <el-option label="日期" value="date"></el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column label="是否必填">
                    <template slot-scope="scope">
                        <el-radio-group v-model="scope.row.fill">
                            <el-radio label="0">非必填</el-radio>
                            <el-radio label="1">必填</el-radio>
                        </el-radio-group>
                    </template>
                </el-table-column>
                <el-table-column label="描述">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.desc" autocomplete="off"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="danger" @click="delect(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
              </el-table>
            </el-form-item>
            <el-form-item>
                <el-link type="primary" @click="addparams" :underline="false">添加参数</el-link>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data () {
        // 判断url是完整的
        var validateApiUrl = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入'));
            } else {
            if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
            }
        }
        return {
            ruleForm: {
                name: '',
                requiredUrl: '',
                requiredMethod: 'GET'
            },
            options: [],
            rules:{
                name: [{required:true,message:'请输入姓名',trigger: 'blur'}],
                requiredUrl: [
                    {required:true,message:'请输入url',trigger:'blur'},
                    {type:'url',message:'请输入正确的url',trigger:'blur'},
                    {validator:validateApiUrl,trigger:'blur'},
                ],
            }
        }
        
    },
    methods: {
        // 添加参数
        addparams(){
            console.log("添加参数")
            if(!Array.isArray(this.ruleForm.params)){
                this.ruleForm.params=[]
            }
            this.ruleForm.params.push({data:'',fill:'1',desc:''})
        },
        // 删除
        delect(index){
            this.ruleForm.params.splice(index,1)
        }
    }
}
</script>
<style>
#apicrea{
    padding: 20px 0 0 20px;;
}
</style>
