<template>
  <el-row type="flex" justify="end">
    <el-col :span="24">
      <el-menu :default-active="activeIndex" mode="horizontal" id="TopNavicate">
        <el-menu-item index="1" @click="toTopic">
          <router-link :to="{ name: 'main' }">主 页</router-link>
        </el-menu-item>
        <el-menu-item index="2" @click="toArticlePage">
          <a> 其 他 </a>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'Blog-Header',
  data() {
    return {
      // 默认活动的link
      activeIndex: "1"
    }
  },
  methods: {
    toTopic() {
      this.$bus.$emit("toTopic")
    },
    toArticlePage() {
      console.log(this.$route);
      let id = 1;
      if (this.$route.name !== "article") {
        this.$router.push({
          name: 'article',
          params: {
            id
          }
        })
      }
    }
  }
}
</script>

<style scoped>
#TopNavicate {
  opacity: 0.5;
  background-color: #0C1014 !important;
  border-bottom: 0;
}

#TopNavicate>li {
  float: right;
  font-size: 18px;
  color: white !important;

}

#TopNavicate:first-child {
  padding-right: 90px;
}

* {
  text-decoration: none;
}
</style>
