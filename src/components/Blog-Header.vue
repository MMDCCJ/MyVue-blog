<template>
  <el-row type="flex" justify="end">
    <el-col :span="24">
      <el-menu :default-active="activeIndex" mode="horizontal" id="TopNavicate">
        <el-menu-item index="3" @click="toEditing">
          <a> 文 章 编 辑 </a>
        </el-menu-item>
        <el-menu-item index="2" @click="toAdmin">
          <a> 管 理 </a>
        </el-menu-item>
        <el-menu-item index="1" @click="toTopic">
          <a>主 页</a>
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
      activeIndex: "1"
    }
  },
  mounted() {
    const routeName = this.$route.name;
    if (routeName === "main") {
      this.activeIndex = "1";
    } else if (routeName === "editing") {
      this.activeIndex = "3";
    }
  },
  methods: {
    // 文章编辑
    toEditing() {
      if (this.$route.name !== "editing") {
        this.$router.push({
          name: 'editing',
        })
        this.$nextTick(() => {
          this.$bus.$emit("toTopic")
        })
      }
    }
    ,
    toTopic() {
      // 页面滚动
      this.toMain()
      this.$nextTick(() => {
        this.$bus.$emit("toTopic")
      })
    },
    toMain() {
      // 文章主界面
      if (this.$route.name !== "main") {
        this.$router.push({
          name: 'main',
        })
      }
    },
    toAdmin() {
      this.$message({ message: '开发ing', type: 'warning' })
    }
    // toArticlePage() {
    //   // 路由到文章 暂时测试用
    //   let id = 1;
    //   if (this.$route.name !== "article") {
    //     this.$router.push({
    //       name: 'article',
    //       params: {
    //         id
    //       }
    //     })
    //   }
    // }
  }
}
</script>

<style scoped>
#TopNavicate {
  opacity: 0.5;
  /* background-color: #3380ff !important; */
  background-color: #130f0c;
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
