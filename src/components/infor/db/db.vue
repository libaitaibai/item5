<template>
    <div id="db">
        <el-container>
            <infor></infor>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import infor from '@/components/infor/infor'
export default {
    name: 'db',
    components: {
        infor
    }
}
</script>
<style>

</style>
