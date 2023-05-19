<template>
    <div>
        <el-row>
            <el-col>
                <el-pagination background :current-page="page" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'blog_pageNation',
    data() {
        return {
            page: 1
        }
    },
    computed: {

    },
    // watch: {
    //     // activePage(newValue){
    //     //     this.$bus.$emit("updatePages",newValue)
    //     // }
    // },
    mounted() {

    },
    methods: {

    }
};
</script>
<style lang='css' scoped>
.el-pagination {
    margin-top: 4rem;
    text-align: center;
}
</style>