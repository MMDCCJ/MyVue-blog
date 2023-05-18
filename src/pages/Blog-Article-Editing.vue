<template>
    <div class="container">
        <div class="titleEdit">
            <h2>标题</h2>
            <el-radio v-model="radio1" label="1" border>新文章</el-radio>
            <el-radio v-model="radio1" label="2" border>修改旧文</el-radio>
            <transition>
                <el-select v-if="radio1 === '2'" class="SelectInput" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </transition>
            <transition>
                <el-input v-if="radio1 === '2'" class="IDInput" type="text" :placeholder="inputTips" v-model="text"
                    maxlength="10" show-word-limit>
                </el-input>
            </transition>

        </div>
        <el-input class="articleInput" type="text" placeholder="请输入标题" v-model="text" maxlength="10" show-word-limit>
        </el-input>
        <div class="contentInput">
            <h2>请输入文本内容</h2>
        </div>
        <el-input type="textarea" :autosize="{ minRows: 10, maxRows: 50 }" placeholder="请输入内容" v-model="textarea">
        </el-input>
    </div>
</template>
<script>
export default {
    name: 'Article-Editing',
    components: {

    },
    mixins: [],
    props: {

    },
    data() {
        return {
            text: '',
            textarea: '',
            radio1: "1",
            options: [{
                value: 'id',
                label: 'id查询'
            }, {
                value: 'title',
                label: '标题查询'
            }],
            value: 'id'
        }
    },
    computed: {
        inputTips() {
            if (this.value === 'id') {
                return "请输入id"
            } else {
                return "请输入标题"
            }
        }
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
.v-enter-active {
    animation: Move 0.3s reverse;
    animation-timing-function: ease-in;
}

.v-leave-active {
    animation: Move 0.2s;
    animation-timing-function: ease-out;
}

@keyframes Move {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(100%);
    }
}

.contentInput {
    display: flex;
}

.contentInput>h2 {
    flex: 1;

}

.IDInput {
    width: 25%;
}

.SelectInput {
    width: 15%;
    margin-right: 2rem;
}

.container {
    display: flex;
    flex-flow: column;
    width: 70%;
    margin: auto;
}

h2 {
    color: white;
    display: inline;
    margin-right: 2rem;
    width: 2rem;
}

.titleEdit>h2 {
    flex: 1
}

.titleEdit {
    height: 4rem;
    display: flex;
    vertical-align: middle;
    align-items: center;
}

.articleInput {
    margin-bottom: 1rem;
}
</style>