<template>
    <div id="intro">
        <p>{{ welcomeMsg }}</p>
        <a href="" id="toMain">
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

.toMain {
    border: 2px solid black;
    /* 设置边框 */
    border-radius: 50%;
    /* 将边框设置为圆形 */
    padding: 10px;
    /* 设置内边距 */
}

@media screen and (max-width:1100px) {
    p {
        font-size: 25px;
    }
}

@media screen and (max-width:1000px) {
    #intro>p {
        display: none;
    }
}
@media screen and (max-width:800px) {
    #intro>a {
        display: none;
    }
}

@media screen and (max-height:700px){
    #intro {
        height: 60vh;
    }
}
</style>