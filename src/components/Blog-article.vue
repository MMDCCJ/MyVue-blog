<template>
    <div id="container">
        <div id="title">
            <h1>测试文章</h1>
        </div>
        <!-- <img src="../../public/main.jpg" alt=""> -->
        <div id="preview">
            <p>这可能是一段测试文本这可能是一段测试文本这可能是一段测试文本</p>
        </div>

        <p id="time">发布事件&nbsp; 2022-03-05 &nbsp;最后更新时间&nbsp; 2023-01-11</p>
    </div>
</template>
<script>
export default {
    name: 'Blog-Article',
    components: {

    },
    mixins: [],
    props: {

    },
    data() {
        return {

        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {

    },
    methods: {
        toArticle(){
            location.href = ''
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
#time{
    text-align: right;
    margin-right: 5rem;
    font-size: 12px;
    }
</style>