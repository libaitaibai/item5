<template>
    <div id="theme">
        <el-container>
            <issue></issue>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import issue from '@/components/issue/issue'
export default {
    name:'theme',
    components: {
        issue
    }
}
</script>
<style>

</style>