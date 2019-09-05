<template>
    <div id="jdct" width="200px">
        <el-container width="200px">
        <el-aside width="200px">
           <ul>
              <li >
                <router-link to="/jdct/alloca" v-show="this.$store.getters.checkPermissionRouter(['/jdct/alloca/'])">
                  <i class="el-icon-menu"></i>
                  <p>权限分配</p>
                </router-link>
              </li>
              <li >
                <router-link to="/jdct/manage" v-show="this.$store.getters.checkPermissionRouter(['/jdct/manage/'])">
                  <i class="el-icon-menu"></i>
                  <p>权限管理</p>
                </router-link>
              </li>
           </ul>
        </el-aside>
    </el-container>
    </div>
</template>
<script>
// import header_right from '@/components/header/header_right'
export default {
    name:'jdct'
}
</script>
<style>
    #jdct{
        height: 100%;
        /* width:100%; */
    }
    .el-container{
        height: 100%;
        /* width:100%; */
    }
  .el-aside {
    background-color: rgb(255, 255, 255);
    color: black;
    text-align: center;
    /* border-right: 1px solid rgb(136, 136, 136); */
    height: 100%;
  }
  
  .el-main {
    background-color: rgb(255, 255, 255);
    color: black;
    text-align: center;
    height: 100%;
  }
  ul{
      border-right:1px solid rgb(230,230,230);
      width:199px;
      height:500px;
      margin:20px 0;
  }
  ul li{
    /* width:199px; */
    height:40px;
    text-align: center;
    line-height:40px;
    margin: 0 20px;
    list-style: none;
  }
  ul li a{
    text-decoration: none;
    color: black;
  }
  .router-link-active{
   color:rgb(105,197,255);
  }
  .router-link-active i{
   color:rgb(105,197,255);
  }
  ul li:hover{
   background-color: rgb(236,245,255);
  }

  ul li p{
    display: inline-block;
    font-size:15px;
  }
  ul li i{
    font-size:18px;
    color:rgb(144,147,153)
  }
</style>