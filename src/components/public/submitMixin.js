import {createItem} from '@/request/axios/commRequest'

// 引入axios的请求数据给表格
var submitMixin = {
  data() {
    return {
      ruleForm: {}
    }
  },
  methods: {
    // 表单验证
    submitForm() {
      var thi=this;
      thi.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          thi.submit()
          console.log('点击登录')
        } else {
          var msg=''
          for(var k in err){
            msg +=err[k][0]['message']+';'
          }
          thi.submitError(msg)
        }
      });
    },
    submitError (msg) {
      console.log(msg)
    },
    submit () {
      var thi=this;
      var id=this.ruleForm.id;
      if(id){
        console.log('有id')
      }else{
        // 创建userid
        createItem(this.url,this.ruleForm).then((res)=>{
          thi.submitSuccess('添加成功',res)
            
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    submitSuccess(msg,res) {
      alert(msg)
      console.log(res)
    },
    goback() {
  	  this.$router.back()
  	},
  }
}
export default submitMixin
