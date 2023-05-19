<template>
    <div>
        <el-row>
            <el-col>
                <el-pagination background @current-change="pageChange" :current-page="pages" layout="prev, pager, next"
                    :total="1000">
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
            pages: 1
        }
    }, methods: {
        pageChange(newValue) {
            this.$bus.$emit("updatePages", newValue)
            localStorage.setItem('pageIndex',newValue)
        }
    },
    mounted() {
        if (localStorage.getItem('pageIndex')) {
            this.pages = Number(localStorage.getItem('pageIndex'))
        }
    }
};
</script>
<style lang='css' scoped>
.el-pagination {
    margin-top: 4rem;
    text-align: center;
}
</style>