<template>
    <el-container class="container">
        <el-aside width="16%">
            <ul class="aside" :class="asideClass">
                <li v-for="item in aside" :key="item.id" @click="moveToTitle(item.id)" class="asideNav">
                    {{ "\xa0\xa0\xa0\xa0".repeat(item.level) + item.tag.slice(0, 10) }}
                    <span v-if="item.tag.length > 10">...</span>
                </li>
            </ul>
        </el-aside>
        <el-main>
            <article ref="articleContainer" class="article-main">
                <div ref="articleContent" id="content">
                </div>
                {{ loading }}
            </article>
        </el-main>
    </el-container>
</template>
<script>
import Vue from 'vue/dist/vue.esm';
import axios from 'axios';
import { nanoid } from 'nanoid'
export default {
    name: 'Article-Page',

    data() {
        return {
            artId: '0',
            loading: '现在正在加载中',
            aside: [],
            asideClass:{
                asideFix:false
            }
        }
    },
    mounted() {
        const bus = this.$bus
        this.$bus.$on("createAside", this.createAside)
        this.artId = this.$route.params.id;
        if (this.artId !== 0) {
            axios({
                url: 'http://www.mmdccj.xyz/api/article/content',
                method: 'GET',
                params: {
                    type:"id",
                    id: this.artId
                }
            }).then((res) => {
                // 挂载从服务器获取到的html文本，然后生成相应的数据给aside用，写的就牛魔离谱
                this.loading = '';
                let HtmlContent = Vue.extend({
                    template: '<div id="ContentRoot" class="contentBox">' + res.data.data[0].article + "</div>",
                    data() {
                        return {
                            $bus: bus
                        }
                    },
                    mounted() {
                        let HList = document.querySelector('#ContentRoot').children
                        let asideData = []
                        // 侧边栏初始化
                        for (const item of HList) {
                            if (item.tagName[0] === "H") {
                                const ID = nanoid();
                                item.id = ID
                                asideData.push({
                                    id: ID,
                                    tag: item.innerText,
                                    level: Number(item.tagName[1])
                                })
                            }
                        }
                        this._data.$bus.$emit("createAside", asideData)
                    },
                })
                new HtmlContent().$mount('#content')
            },
                (error) => {
                    alert(error.message)
                }
            )
        } else {
            // 后续怎加一个弹窗提示
            console.log("错误的id");
        }

    },
    methods: {
        // 加载侧边栏捏
        createAside(asideData) {
            this.aside = asideData
        },
        // 点击滑到对应的标题位置
        moveToTitle(id) {
            document.querySelector(`#${id}`)?.scrollIntoView(true);
        }
    }
};
</script>
<style>
.contentBox p{
    line-height: 26px;
    font-size: 18px;
}
.contentBox h1 {
    font-size: 35px;
    margin-bottom: 2rem;
}

.contentBox h2::before {
    content: '-';
}

.container h3::before {
    content: '--';
}

.container h4::before {
    content: '---';
}

.container h5::before {
    content: '----';
}

.contentBox h2 {
    font-size: 28px;
    margin-bottom: 2.5rem;
    font-weight: 800;
    background-image: linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.contentBox h3 {
    margin-bottom: 2rem;
    font-size: 21px;
    background-image: linear-gradient(to right, #83a4d4, #b6fbff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.contentBox p,
.contentBox section {
    /* font-size: 200; */
    /* 缩进 */
    text-indent: 2em;
    /* line-height: 1em; */

}
</style>
<style lang='css' scoped>
.asideFix{

}
article {
    color: white;
    /* border: 1px solid #66ccff; */
    margin: 1rem;
}

.asideNav {
    cursor: pointer;
}

.content {
    text-align: left;
    padding-left: 1rem;
}

.content p,
section {
    /* display: block; */
    margin-left: 1rem;
}

.container {
    margin-top: 3rem;
}

li {
    list-style: none;
    color: #213547;
    margin-bottom: 0.5rem;
}

li:last-child {
    height: 4em;
}

ul {
    background-color: #42b883;
    padding: 0;
    padding-top: 2rem;
    border-radius: 0.5rem;
    margin-right: 2%;
}
</style>