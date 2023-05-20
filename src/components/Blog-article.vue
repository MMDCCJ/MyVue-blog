<template>
    <div id="container" @click="toArticle">
        <div id="title">
            <h2>{{ title }}</h2>
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
#container:hover{
    filter: brightness(1.3);
    cursor: pointer;
}
#container {
    background-color: #130f0c;
    color: white;
    width: 55vh;
    height: 20vh;
    /* border: 1px solid white; */
    margin: 10vh auto 7vh;
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    box-shadow:8px 8px 10px black;

}
p{
    font-size: 18px;
    margin-top: 35px;
}
h2,
p {
    margin-left: 5rem;
    cursor: pointer;
}
h2{
    margin: 0,0;
    font-size: 25px;
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
    margin-right: 3.2vh;
    font-size: 12px;
    margin-top: 38px;
}
</style>