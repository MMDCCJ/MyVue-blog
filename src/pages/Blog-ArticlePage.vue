<template>
    <el-container class="container">
        <el-aside width="20%">
            <ul class="aside">
                <li>这是侧边栏</li>
            </ul>
        </el-aside>
        <el-main>
            <article ref="articleContainer" class="article-main">
                {{ loading }}
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
            artId:'0',
            loading:'现在正在加载中'
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        this.artId = this.$route.params.id;
        this.$http.get('http://www.mmdccj.xyz/api/article/content',{
            id:this.artId
        }).then(
            (res)=>{
                this.loading = ''
                this.$refs.articleContainer.innerHTML = ""
                console.log(res.data);
            },
            (error)=>{
                alert(error.message)
            }
        )
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