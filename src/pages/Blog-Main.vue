<template>
   <div id="maincontainer">
      <B_article v-for="(art) in artList" :key="art.ID" :title="art.title" :body="art.articleBody"
         :updateTime="art.firstUpdateDate" :lastUpdateTime="art.lastUpdateDate" :artID="art.ID" />
   </div>
</template>
<script>
import B_article from '../components/Blog-article.vue'
export default {
   name: 'Blog-Main',
   data() {
      return {
         artList: [{
            ID: 0,
            firstUpdateDate: '1145-1-4',
            lastUpdateDate: '1145-1-4',
            title: '没有这么多文章喵',
            articleBody: '没有这么多文章喵',
            isDelete: 'N',
            author: 'MMDCCJ'
         }]
      }
   },
   mounted() {
      // 绑定更改页面事件
      this.$bus.$on("toOtherPages", this.toOtherPages);
      this.$bus.$on("pagesReload", this.reloadPages)
      // 读取页面，如果存在的话
      if (localStorage.getItem('pages') && localStorage.getItem('pages') !== "undefined") {
         this.artList = JSON.parse(localStorage.getItem('pages'))
      }
   },
   methods: {
      // 解析从服务器请求来的数据
      toOtherPages() {
         this.artList = JSON.parse(localStorage.getItem('pages'))
      },
      // 有的时候服务器反应较慢所以写一个reload事件来防止进入网页的速度快于服务器响应pages的数据
      reloadPages() {
         if (localStorage.getItem('pages') && localStorage.getItem('pages') !== "undefined") {
            this.artList = JSON.parse(localStorage.getItem('pages'))
         }
      }
   },
   components: {
      B_article
   },
};
</script>
