<template>
    <div id="login">
        <el-container>
            <div class="headview">
                <p>城市智能管理运营指挥中心配置管理平台</p>
            </div>
            <el-main>
                <div class="main">
                    <!-- 登录组件 -->
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item prop="username" style="margin-left: -100px;" required>
                            <el-input v-model="ruleForm.username" placeholder="用户名" autocomplete="off" prefix-icon="el-icon-edit"></el-input>
                        </el-form-item>
                        <el-form-item prop="password" style="margin-left: -100px;" required>
                            <el-input type="password" placeholder="密码" v-model="ruleForm.password" autocomplete="off" prefix-icon="el-icon-edit"></el-input>
                        </el-form-item>
                        <el-form-item style="margin-left: -100px;">
                            <el-button type="warning" @click="submitForm()">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-main>
            <el-footer>
                <p>footer</p>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
import submitMixin from '@/components/public/submitMixin'
import {httpRequest} from '@/request/axios/commRequest'
export default {
  name: 'login',
  mixins: [submitMixin],
  data () {
    return {
      url: '/u/login',
      ruleForm: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }   
  },
  methods: {
    submit () {
      var thi = this
      httpRequest(this.url, 'POST', [], this.ruleForm).then((res) => {
        console.log(res)
        if (res.data && res.data.code < 300) {
          // 把data储存在vuex和window中异步操作setuserinfo是方法名
          console.log(this.$store)
          this.$store.dispatch('setuserinfo', res.data.data)
          thi.submitSuccess()
          console.log(this.$store.state.userinfo)
        } else {
          thi.submitError('登录失败,请联系管理员')
        }
      }).catch((err) => {
        thi.submitError(err)
      })
    },
    submitSuccess (msg, res) {
      console.log('登录成功')
      //  TODO 到首页
      this.$router.push({ path: '/info/api' })
      //  this.goback()
    },
  }
}
</script>
<style lang="less" scoped>
html,body,#app{
    height:100%;
}
#login{
    height:100%;
    .el-container{
        height:100%;
        .headview{
            background-color: rgb(27,83,175);
            height: 60px;
            color: rgb(253, 253, 253);
            font-size:24px;
            padding-left: 20px;
            line-height:60px;
        }
        .el-main{
            height:100%;
            .demo-ruleForm{
                width:400px;
                margin: 0 auto;
                text-align: center;
                padding-top: 20px;
            }
        }
        .el-footer{
            height: 60px;
            line-height:60px;
            border-top: 1px solid rgb(112, 112, 112);
            text-align: right;
            color:rgb(119, 119, 119);
        }
    }
}
</style>
