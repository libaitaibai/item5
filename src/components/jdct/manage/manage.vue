<template>
    <div id="manage">
        <el-container>
            <div>
                <jdct></jdct>
            </div>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import jdct from '@/components/jdct/jdct'
export default {
    name:'manage',
    components: {
        jdct
    }
}
</script>
<style>
</style>