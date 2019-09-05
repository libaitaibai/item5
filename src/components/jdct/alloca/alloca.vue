<template>
    <div id="alloca">
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
    name:'alloca',
    components: {
        jdct
    }
}
</script>
<style>
</style>