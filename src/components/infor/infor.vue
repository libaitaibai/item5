<template>
    <div id="infor" style="width:220px;">
        <el-container style="width:220px;">
        <el-aside style="width:220px;">
           <ul>
              <li >
                <router-link to="/info/api" v-show="this.$store.getters.checkPermissionRouter(['/info/api/'])">
                  <i class="el-icon-menu"></i>
                  <p>APi管理</p>
                </router-link>
              </li>
              <li >
                <router-link to="/info/db" v-show="this.$store.getters.checkPermissionRouter(['/info/db/'])">
                  <i class="el-icon-document"></i>
                  <p>数据源管理</p>
                </router-link>
              </li>
           </ul>
        </el-aside>
    </el-container>
    </div>
</template>
<script>
export default {
  name: 'infor'
}
</script>
<style lang="less" scoped>
.el-container{
height: 100%;
/* width:100%; */
  .el-aside {
    background-color: rgb(255, 255, 255);
    /* color: black; */
    text-align: center;
    /* border-right: 1px solid rgb(136, 136, 136); */
    height: 100%;
    ul {
      border-right:1px solid rgb(230,230,230);
      width:219px;
      height:500px;
      margin:20px 0;
      li{
        /* width:199px; */
        height:65px;
        text-align: center;
        line-height:65px;
        width: 200px;
        margin: 0 20px;
        list-style: none;
        .router-link-active{
          color:rgb(64,158,255);
          i{
            color:rgb(64,158,255);
          }
        }
        a{
          text-decoration: none;
          color: black;
          p{
            display: inline-block;
            font-size:15px;
          }
          i{
            font-size:18px;
            color:rgb(144,147,153);
          }
        }
        /* :visited{
          text-decoration: none;
          color: black;
        } */
      }
      :hover{
        background-color: rgb(236,245,255);
      }
    }
  }
  .el-main {
    background-color: rgb(255, 255, 255);
    color: black;
    text-align: center;
    height: 100%;
  }
}

</style>
