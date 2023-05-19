<template>
  <div id="app">
    <el-container>
      <el-header>
        <B_Header />
      </el-header>
      <el-main>
        <B_Intro />
        <router-view name="me" />
        <router-view name="main" />
        <router-view name="article" />
        <router-view name="editing" />
        <router-view name="pageNation" />
        <!-- <B_Main /> -->
      </el-main>
      <el-footer>
        <B_footer />
      </el-footer>
    </el-container>
    <!-- toTop -->
    <el-backtop :visibility-height="500"></el-backtop>
  </div>
</template>

<script>
import B_Header from './components/Blog-Header.vue'
import B_Intro from './components/Blog-Intro.vue'
import B_footer from './components/Blog-footer.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    B_Header,
    B_Intro,
    B_footer
  },
  methods: {
    // 更新页面
    updatePages(page) {
      axios({
        method: 'GET',
        url: 'http://www.mmdccj.xyz/api/article/overview',
        params: { page }
      }).then((res) => {
        if (res.data.code === 200) {
          localStorage.setItem("pages", JSON.stringify(res.data.data))
        } else {
          localStorage.setItem("pages", JSON.stringify([{
            ID: 0,
            firstUpdateDate: '1145-1-4',
            lastUpdateDate: '1145-1-4',
            title: '没有这么多文章喵',
            articleBody: '没有这么多文章喵',
            isDelete:'N',
            author:'MMDCCJ'

          }]))
        }
        this.$bus.$emit('toOtherPages')
      },
        function (error) {
          console.log(error);
        })
    }
  },
  created() {
    // 获取名言
    if (!localStorage.getItem("sayings")) {
      this.$http.get('http://www.mmdccj.xyz/api/sayings').then(function (res) {
        localStorage.setItem("sayings", JSON.stringify(res.body.data));
      }, function (error) {
        console.log('请求失败', error);
      });
    }
    this.$http.get('http://www.mmdccj.xyz/api/article/overview?page=1').then(
      function (res) {
        localStorage.setItem("pages", JSON.stringify(res.body.data))
      }
    )

    // 获取全部文章
    // this.$http.get("127.0.0.1/api/article/overview",{
    //   page:1
    // }).then(function(res){
    //   console.log(res.body.data);
    // },function(error){
    //   console.log("请求失败",error);
    // })
  }
  ,
  data() {
    return {
      radio: '1'
    }
  },
  mounted() {
    this.$bus.$on("updatePages", this.updatePages)
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
