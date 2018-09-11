<template>
<div id="app">
  <el-container>
    <el-header>
      <TopBar/>
    </el-header>

    <router-view></router-view>

    <el-footer>
      <FootBar></FootBar>
    </el-footer>
  </el-container>

</div>
</template>

<script>
import TopBar from '@/components/TopBar'
import FootBar from '@/components/FootBar'
export default {
  name: 'App',
  components: {FootBar, TopBar}
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
header{
  padding: 0px;
}
</style>
