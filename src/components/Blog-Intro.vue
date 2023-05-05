<template>
    <div id="intro">
        <p>{{ welcomeMsg }}</p>
        <a href="">
            <p class="el-icon-bottom"></p>
        </a>
        
    </div>
</template>
<script>
export default {
    name: 'Blog-intro',
    data() {
        return {
            welcomeMsg: '"Cogito, ergo sum." —— 笛卡尔 (René Descartes)'
        }
    }
};
</script>
<style lang='css' scoped>
#intro {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    flex-direction: column;
    /* 设置容器高度以实现垂直居中 */
}

p {
    position: relative;
    color: white;
    opacity: 0.8;
    font-size: 35px;
}

</style>