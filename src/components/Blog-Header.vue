<template>
  <el-row type="flex" justify="end">
    <el-col :span="24">
      <el-menu :default-active="activeIndex" mode="horizontal" id="TopNavicate">
        <el-menu-item index="1" @click="toTopic">
          <a>主 页</a>
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
      this.toMain()
      this.$nextTick(() => {
        this.$bus.$emit("toTopic")
      })
    },
    toMain() {
      if (this.$route.name !== "main") {
        this.$router.push({
          name: 'main',
        })
      }
    },
    toArticlePage() {
      // 路由到文章 暂时测试用
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
