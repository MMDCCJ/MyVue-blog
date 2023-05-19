<template>
    <el-container class="container">
        <el-aside width="20%">
            <ul class="aside">
                <li>这是侧边栏</li>
            </ul>
        </el-aside>
        <el-main>
            <article class="article-main">
                <h1>第一个测试文章</h1>
                <p>这是测试段落,还处于装修阶段，预计完工时间不详</p>
            </article>
        </el-main>
    </el-container>
</template>
<script>
export default {
    name: 'Article-Page',
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

    }
};
</script>
<style lang='css' scoped>
article {
    font-size: 18px;
    color: white;
    border: 1px solid #66ccff;
    margin: 1rem;
}

.article-main h1 {
    font-size: 30px;
}

.container {
    margin-top: 3rem;
}

li {
    list-style: none;
    color: white;
}

ul {
    border: 1px solid white;
    text-align: center;
    padding: 0;
}</style>