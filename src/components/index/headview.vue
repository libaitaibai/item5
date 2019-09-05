<template>
    <div id="heada">
        <el-row>
            <el-col :span="8">
                <p>城市智能管理运营指挥中心配置管理平台</p>
            </el-col>
            <el-col :span="12">
                <router-link to="/info/api">数据管理</router-link>
                <router-link to="/issue/app">发布管理</router-link>
                <router-link to="/jdct/alloca">权限管理</router-link>
                <router-link to="/resource/list">资源管理</router-link>
            </el-col>
            <el-col :span="4">
                
            </el-col>
        </el-row>
    </div>
</template>
    
<script>
export default {
    name: 'heada'
}
</script>
    
<style>
.el-row{
    line-height: 60px;
    height:60px;
}
.el-col{
    height:60px;
}
.el-col-8 p{
    color:white;
    min-width:480px;
    font-size: 23px;
}
/* 使两个a之间没有间隙 */
.el-col-12{
    font-size: 0;
}
.el-col-12 a{
    color:white;
    font-size: 19px;
    padding:0 10px;
    text-decoration:none;
    height:60px;
    min-width:120px;
    display: inline-block;
    text-align: center;
}
.el-col-12 a:hover{
    background-color: rgb(52,152,219); 
}
/* 点击改变颜色 */
.el-col-12>.router-link-active{
    background-color:  rgb(52,152,219);
}
</style>
    