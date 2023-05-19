<template>
    <div class="container">
        <div class="titleEdit">
            <h2>标题</h2>
            <el-radio :class="radioClass" key="1" v-model="newEdit" label="1" border>新文章</el-radio>
            <el-radio :class="radioClass" key="2" v-model="newEdit" label="2" border>修改旧文</el-radio>
            <transition>
                <el-select v-if="newEdit === '2'" class="SelectInput" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </transition>
            <transition>
                <el-input v-if="newEdit === '2'" class="IDInput" type="text" :placeholder="inputTips" v-model="articleData.text"
                    maxlength="10" show-word-limit>
                </el-input>
            </transition>
        </div>
        <el-input class="articleInput" type="text" placeholder="请输入标题" v-model="articleData.title" maxlength="50" show-word-limit>
        </el-input>
        <div class="contentInput">
            <h2>文章主体</h2>
        </div>
        <div class="textAreaContainer">
            <el-input class="textArea" type="textarea" :autosize="{ minRows: 10, maxRows: 50 }" placeholder="请输入内容"
                v-model="articleData.textarea">
            </el-input>
            <div ref="miniArticle" class="miniArticle"></div>
        </div>

        <div class="contentInput">
            <h2 class="lay10">文章类型</h2>
            <h2 class="lay14">作者</h2>
        </div>
        <el-row class="authorEdit">
            <el-col :span="10">
                <el-autocomplete class="inline-input" v-model="articleData.typeData" :fetch-suggestions="querySearch"
                    placeholder="请输入文章类型"></el-autocomplete>
            </el-col>
            <el-col :span="14">
                <el-input class="articleInput" type="text" placeholder="请输入作者" v-model="articleData.author" maxlength="20"
                    show-word-limit></el-input>
            </el-col>
        </el-row>
        <el-row class="btns">
            <el-col :span="2">
                <el-popconfirm @confirm="upload" class="commitBtn" confirm-button-text='好的' cancel-button-text='稍后'
                    icon="el-icon-question" icon-color="#66ccff" title="确定上传当前内容吗？">
                    <el-button slot="reference">上传</el-button>
                </el-popconfirm>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" @click="save">保存草稿</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'Article-Editing',
    data() {
        return {
            articleData: {
                title: '',
                typeData: '',
                textarea: '',
                author: '',
            },
            type: [
                { value: '代码类' },
                { value: '教程类' },
                { value: '笔记类' },
                { value: '其他' }
            ],
            newEdit: "1",
            options: [{
                value: 'id',
                label: 'id查询'
            }, {
                value: 'title',
                label: '标题查询'
            }],
            value: 'id',
            radioClass: ''
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
        newEdit(newValue) {
            if (newValue === "2") {
                this.radioClass = "radioMove";
            } else {
                this.radioClass = "radioOut";
            }
        },
        articleData:{
            deep:true,
            handler(newObj){
                this.$refs.miniArticle.innerHTML = newObj.textarea;
                this.save();
            }
        },
    },
    mounted() {
        const draftData = JSON.parse(localStorage.getItem('draft'));
        console.log(draftData);
        if (draftData) {
            this.articleData.title = draftData.title;
            this.articleData.textarea = draftData.textarea;
            this.articleData.typeData = draftData.typeData;
            this.articleData.author = draftData.author;
        }
    },
    methods: {
        upload() {
            console.log("提交了文章");
        },
        // 以下两个方法为建议框需要的方法
        querySearch(queryString, cb) {
            let type = this.type;
            let results = queryString ? type.filter(this.createFilter(queryString)) : type;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (type) => {
                return (type.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        // 保存草稿
        save() {
            const data = {
                title: this.articleData.title,
                textarea: this.articleData.textarea,
                typeData: this.articleData.typeData,
                author: this.articleData.author
            }
            localStorage.setItem('draft', JSON.stringify(data));
        }
    }
};
</script>
<style lang='css' scoped>
.btns {
    margin-top: 2rem;
}

/* 布局用 */
.lay10 {
    flex: 10 !important;
}

.lay14 {
    flex: 14 !important;
}

.textAreaContainer {
    display: flex;
}

.textAreaContainer>.textArea {
    flex: 1;
    margin-right: 1rem;
}

.textAreaContainer>.miniArticle {
    flex: 2;
    background-color: white;
}

.textAreaContainer>.miniArticle h1 {
    font-size: 16px !important;
}

.textAreaContainer>.miniArticle p {
    font-size: 10px !important;
}

.textAreaContainer>.miniArticle h2 {
    font-size: 14px !important;
}

.commitBtn {
    margin-top: 2rem;
}

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

.radioMove {
    animation: rightLeft 0.25s;
    animation-timing-function: ease-out;
}

.radioOut {
    animation: rightLeft 0.25s reverse;
    animation-timing-function: ease-in;
}

@keyframes rightLeft {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
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
    margin-top: 3rem;
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