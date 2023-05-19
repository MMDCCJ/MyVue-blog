<template>
   <div id="maincontainer">
      <B_article v-for="(art) in artList" :key="art.ID" :title="art.title" :body="art.articleBody"
         :updateTime="art.firstUpdateDate" :lastUpdateTime="art.lastUpdateDate" :artID="art.ID"/>
   </div>
</template>
<script>
import B_article from '../components/Blog-article.vue'
export default {
   name: 'Blog-Main',
   data() {
      return {
         artList: [{
            title: '暂无文章',
            body: '空',
            updateTime: '2022-1-1',
            lastUpdateDate: '2022-1-1'
         }]
      }
   },
   mounted() {
      // 绑定更改页面事件
      this.$bus.$on("toOtherPages",this.toOtherPages);
      if (localStorage.getItem('pages')) {
         this.artList = JSON.parse(localStorage.getItem('pages'))
      }
   },
   methods:{
      toOtherPages(){
         this.artList = JSON.parse(localStorage.getItem('pages'))
      }
   },
   components: {
      B_article
   },
};
</script>
