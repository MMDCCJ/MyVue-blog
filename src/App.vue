<template>
  <div id="app">
    <el-container>
      <el-header>
        <B_Header/>
      </el-header>
      <el-main>
        <B_Intro/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import B_Header from './components/Blog-Header.vue'
import B_Intro from './components/Blog-Intro.vue'
export default {
  name: 'App',
  components: {
    B_Header,
    B_Intro
  },
  data() {
    return {
      radio: '1'
    }
  }
}
</script>

<style>
#app{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  
}
body{
  background-image: url('../public/main.jpg');
  background-size:100% ;
  background-repeat:no-repeat;
}

</style>
