<template>
  <el-row type="flex" justify="end">
    <el-col :span="24">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" id="TopNavicate">
        <el-menu-item index="1">主页</el-menu-item>
        <el-menu-item index="2">消息中心</el-menu-item>
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
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
#TopNavicate:first-child{
  padding-right: 90px;
}
</style>
