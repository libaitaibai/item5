<template>
    <div id="index">
        <el-container>
            <div class="heada">
                <headview/>
            </div>
            <el-main>
                <mainview/>
            </el-main>
            <el-footer>
                <p>footer</p>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import headview from './headview'
import mainview from './main_view'
export default {
    name: 'index',
    components: {
        headview,
        mainview
    }
}
</script>

<style>
#index,.el-container{
    height:100%;
    min-width:1400px;
}
.heada{
    background-color: rgb(27,83,175);
    height:60px;
    padding:0 20px;
}
.el-footer{
    height:60px;
    text-align: right;
    padding:0 10px 0 0;
    line-height: 60px;
    color:rgb(119, 119, 119);
    border-top: 1px solid rgb(119, 119, 119);
}
.el-main{
    /* background-color: rgb(100, 27, 134); */
    height:100%;
    padding:0;
}
</style>
    