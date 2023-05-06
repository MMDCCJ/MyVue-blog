<template>
    <div id="container">
        <div id="box">
            <h2>测试文章233333</h2>
            <img src="../../public/main.jpg" alt="">
            <p>test</p>
        </div>
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

    }
};
</script>
<style lang='css' scoped>
img {
    height: 50px;
}

#container {
    margin: 5vh auto;
    width: 80vh;
    height: 25vh;
    border: 1px solid white;
    box-sizing: border-box;
    color: white;
}
#container > #box{
    margin-left: 5vh;
}
</style>