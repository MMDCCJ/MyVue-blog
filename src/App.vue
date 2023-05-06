<template>
  <div id="app">
    <el-container>
      <el-header>
        <B_Header/>
      </el-header>
      <el-main>
        <B_Intro/>
        <B_Me/>
        <B_Main/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import B_Header from './components/Blog-Header.vue'
import B_Intro from './components/Blog-Intro.vue'
import B_Main from './components/Blog-Main.vue'
import B_Me from './components/Blog-Me.vue'
export default {
  name: 'App',
  components: {
    B_Header,
    B_Intro,
    B_Main,
    B_Me
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
  background-color: #130f0c;
}
html{
  scroll-behavior: smooth;
}

</style>
