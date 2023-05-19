<template>
    <div id="intro">
        <p>"{{ welcomeMsg.saying }}" --{{ welcomeMsg.speaker }}</p>
        <a @click="anchorPoint" id="toMain" ref="toTopic">
            <p class="el-icon-bottom float-element"></p>
        </a>
    </div>
</template>
<script>
export default {
    name: 'Blog-intro',
    computed: {
        welcomeMsg() {
            let msg = JSON.parse(localStorage.getItem('sayings'));
            if (!msg) {
                // api失效时默认标语
                msg = {
                    saying: 'Cogito, ergo sum.',
                    speaker: '笛卡尔 (René Descartes)'
                }
            } else {
                // 获取随机标语
                let id = Math.random(5) * 4;
                id = Math.floor(id);
                msg = msg[id];
            }
            return msg
        },

    },
    methods: {
        // 去文章页
        toTopic() {
            this.$refs.toTopic.click();
        },
        // 跳转
        anchorPoint() {
            this.$nextTick(() => {
                if (this.$route.name === "main") {
                    document.querySelector("#me")?.scrollIntoView(true);
                }else if(this.$route.name === "article"){
                    document.querySelector(".container")?.scrollIntoView(true);
                }else if(this.$route.name ==="editing"){
                    document.querySelector(".container")?.scrollIntoView(true);
                }
            })
        }
    },
    mounted() {
        // 触发快捷跳转时间
        this.$bus.$on("toTopic", this.toTopic)
    }
};
</script>
<style lang='css' scoped>
#intro {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80rem;
    flex-direction: column;
}

p {
    position: relative;
    color: white;
    opacity: 0.8;
    font-size: 35px;
}

a {
    cursor: pointer;
}

/* 箭头上下浮动动画效果 */
@keyframes float-up-down {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}

.float-element {
    animation: float-up-down 1.65s infinite;
}

@media screen and (max-width:1570px) {
    #intro {
        height: 40rem;
    }
}

/* @media screen and (max-width:1000px) {
    #intro>p {
        display: none;
    }
}
@media screen and (max-width:800px) {
    #intro>a {
        display: none;
    }
}

@media screen and (max-height:700px){
    #intro {
        height: 60vh;
    }
}  */
</style>