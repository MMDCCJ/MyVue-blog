<template>
    <div id="container" @click="toArticle">
        <div id="title">
            <h1>{{ title }}</h1>
        </div>
        <div id="preview">
            <p>{{ body }}</p>
        </div>

        <p id="time">发布事件&nbsp; {{updateTime}} &nbsp;最后更新时间&nbsp; {{lastUpdateTime}}</p>
    </div>
</template>
<script>
export default {
    name: 'Blog-Article',
    components: {

    },
    props: [
        "title",
        "body",
        "updateTime",
        "lastUpdateTime",
        "artID"
    ],
    mounted() {
    },
    methods: {
        toArticle() {
            // 路由到文章详情
            this.$router.push({
                name: 'article',
                params: {
                    id: this.artID
                }
            })
        }
    },
};
</script>
<style lang='css' scoped>
img {
    height: 50px;
}

#container {
    background-color: #181614;
    margin: 0rem auto;
    width: 55rem;
    height: 15rem;
    box-sizing: border-box;
    color: white;
}

h1,
p {
    margin-left: 5rem;
    cursor: pointer;
}

#title {
    height: 30%;
    line-height: 6.3rem;
    font-size: 21px;
}

#preview {
    height: 35%;
    line-height: 2.4rem;
}

#time {
    text-align: right;
    margin-right: 5rem;
    font-size: 12px;
}
</style>