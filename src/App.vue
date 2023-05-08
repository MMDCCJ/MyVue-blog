<template>
  <div id="app">
    <el-container>
      <el-header>
        <B_Header />
      </el-header>
      <el-main>
        <B_Intro />
        <B_Me />
        <B_Main />
      </el-main>
      <el-footer>
        <B_footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import B_Header from './components/Blog-Header.vue'
import B_Intro from './components/Blog-Intro.vue'
import B_Main from './components/Blog-Main.vue'
import B_Me from './components/Blog-Me.vue'
import B_footer from './components/Blog-footer.vue'
export default {
  name: 'App',
  components: {
    B_Header,
    B_Intro,
    B_Main,
    B_Me,
    B_footer
  },
  created() {
    // 获取名言
    if (!localStorage.getItem("sayings")) {
      this.$http.get('http://www.mmdccj.xyz/api/sayings').then(function (res) {
        localStorage.setItem("sayings", JSON.stringify(res.body.data));
      }, function () {
        console.log('请求失败处理');
      });
    }
  }
  ,
  data() {
    return {
      radio: '1'
    }
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

}

body {
  background-image: url('../public/mainzip.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #130f0c;
}

html {
  scroll-behavior: smooth;
}
</style>
