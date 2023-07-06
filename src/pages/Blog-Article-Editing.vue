<template>
    <div class="container">
        <div class="titleEdit">
            <h2>标题</h2>
            <el-radio class="radioClass" key="1" v-model="newEdit" label="1" border>新文章</el-radio>
            <el-radio class="radioClass" key="2" v-model="newEdit" label="2" border>修改旧文</el-radio>
            <!-- 查询方式 -->
            <transition>
                <el-select v-if="newEdit === '2'" class="SelectInput" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </transition>
            <!-- 搜索按钮 -->
            <transition>
                <el-button @keydown.enter="search" @click="search" v-if="newEdit === '2'" class="searchBtn"
                    icon="el-icon-search" circle></el-button>
            </transition>
            <transition>
                <el-input v-if="newEdit === '2'" class="IDInput" type="text" :placeholder="inputTips"
                    v-model="articleData.idOrTitle" maxlength="10" show-word-limit>
                </el-input>
            </transition>

        </div>
        <!-- 按标题查询 -->
        <el-input class="articleInput" type="text" placeholder="请输入标题" v-model="articleData.title" maxlength="50"
            show-word-limit>
        </el-input>
        <div class="contentInput">
            <h2>文章梗概</h2>
        </div>
        <el-row>
            <el-input type="text" placeholder="请输入文章梗概" v-model="articleData.about" maxlength="50" show-word-limit
                :span="24">
            </el-input>
        </el-row>
        <div class="contentInput">
            <h2>文章主体</h2>
        </div>
        <div class="textAreaContainer">
            <el-input class="textArea" type="textarea" :autosize="{ minRows: 20, maxRows: 100 }" placeholder="请输入内容"
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
            <el-col :span="10">
                <el-popconfirm v-if="newEdit == 1" @confirm="upload" class="commitBtn" confirm-button-text='好的'
                    cancel-button-text='稍后' icon="el-icon-question" icon-color="#66ccff" title="确定上传当前内容吗？">
                    <el-button slot="reference">上传</el-button>
                </el-popconfirm>
                <el-popconfirm v-if="newEdit == 2" @confirm="updateArticle" class="commitBtn" confirm-button-text='好的'
                    cancel-button-text='稍后' icon="el-icon-question" icon-color="#66ccff" title="确定上传当前内容吗？">
                    <el-button slot="reference">更新文章</el-button>
                </el-popconfirm>
                <el-button type="primary" @click="save(`btn`)" class="saveDraft">保存草稿</el-button>
                <el-button type="primary" @click="clear">清除草稿</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Article-Editing',
    data() {
        return {
            articleData: {
                title: '',
                typeData: '',
                textarea: '',
                author: '',
                about: '',
                idOrTitle: ''
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
            // 查询方式 id-title
            value: 'id',
        }
    },
    computed: {
        inputTips() {
            if (this.value === 'id') {
                return "请输入 id"
            } else {
                return "请输入标题"
            }
        }
    },
    watch: {
        // 实时更新草稿
        articleData: {
            deep: true,
            handler(newObj) {
                this.$refs.miniArticle.innerHTML = newObj.textarea;
                if (this.newEdit === "1") {
                    this.save();
                }
            }
        },
    },
    mounted() {
        const draftData = JSON.parse(localStorage.getItem('draft'));
        if (draftData) {
            this.articleData.title = draftData.title;
            this.articleData.textarea = draftData.textarea;
            this.articleData.typeData = draftData.typeData;
            this.articleData.author = draftData.author;
            this.articleData.about = draftData.about;
        }
    },
    methods: {
        // 清除草稿
        clear() {
            localStorage.removeItem('draft')
            for (let item in this.articleData) {
                this.articleData[item] = ""
            }
            this.$message({
                message: '清除草稿成功',
                type: 'success'
            });
        },
        // 更新文章
        updateArticle() {
            const data = {
                title: this.articleData.title,
                article: this.articleData.textarea,
                articleType: this.articleData.typeData,
                author: this.articleData.author,
                articleBody: this.articleData.about
            }
            if (this.newEdit === '2') {
                data['id'] = this.articleData.idOrTitle
            }
            axios({
                method: 'POST',
                url: 'http://www.mmdccj.xyz/api/updateArticle',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data
            }).then(() => {
                this.$message({
                    message: '修改文章成功',
                    type: 'success'
                })
            },
                (error) => {
                    console.log(error.message);
                })
        },
        // 查找待修改的文章
        // http://www.mmdccj.xyz/api/writing
        search() {
            if (this.articleData.idOrTitle === "") {
                return this.$message({
                    message: '请输入有效的字符',
                    type: 'warning'
                });
            }
            let instance;
            if (this.value == "id") {
                instance = new axios({
                    method: 'GET',
                    url: 'http://www.mmdccj.xyz/api/writing/updateData',
                    params: {
                        type:"id",
                        id: this.articleData.idOrTitle
                    }
                })
            } else {
                instance = new axios({
                    method: 'GET',
                    url: 'http://www.mmdccj.xyz/api/writing/updateData',
                    params: {
                        type:"title",
                        title: this.articleData.idOrTitle
                    }
                })
            }
            instance.then((res) => {
                const data = res.data.data[0]
                this.articleData.title = data.title
                this.articleData.about = data.articleBody
                this.articleData.author = data.author
                this.articleData.textarea = data.article
                this.articleData.typeData = data.articleType
                this.$message({
                    message: `成功查询到标题${this.articleData.title}的文章`,
                    type: 'success'
                })
            },
                (error) => {
                    alert(error.message)
                })

        },
        // 上传新文章
        upload() {
            const dataObj = {
                title: this.articleData.title,
                articleType: this.articleData.typeData,
                articleMain: this.articleData.textarea,
                articleBody: this.articleData.about,
                author: this.articleData.author
            }
            for (const item in dataObj) {
                if (dataObj[item].trim() === '') {
                    return this.$message(
                        { message: `${item}不能为空`, type: 'error' }
                    )
                }
            }
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: dataObj,
                url: 'http://www.mmdccj.xyz/api/writing',
            }
            axios(options).then((res) => {
                res
                this.$message({
                    message: '上传文章成功',
                    type: 'success'
                });
            }, (error) => {
                console.log(error.message);
            })
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
        save(msg) {
            const data = {
                title: this.articleData.title,
                textarea: this.articleData.textarea,
                typeData: this.articleData.typeData,
                author: this.articleData.author,
                about: this.articleData.about
            }
            localStorage.setItem('draft', JSON.stringify(data));
            if (msg === "btn") {
                this.$message({
                    message: '保存草稿成功',
                    type: 'success'
                });
            }
        }
    }
};
</script>
<style lang='css' scoped>
.radioClass {
    margin-right: 0.8rem;
}

.searchBtn {
    margin-right: 0.5rem;
}

.saveDraft {
    margin-left: 3rem;
}

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
    margin-right: 1rem;
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