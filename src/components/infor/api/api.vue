<template>
    <el-container>
      <infor/>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
</template>

<script>
import infor from '@/components/infor/infor'
export default {
  name: 'apiView',
  components: {
    infor
  }
}
</script>
<style>

</style>
