<template>
    <div id="intro">
        <div class="sloganBox">
            <p>"{{ welcomeMsg.saying }}" --{{ welcomeMsg.speaker }}</p>
            <a @click="anchorPoint" id="toMain" ref="toTopic">
                <p class="el-icon-bottom float-element"></p>
            </a>
        </div>
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
    data() {
        return {
            src: '../../public/mainzip.jpg'
        }
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
                } else if (this.$route.name === "article") {
                    document.querySelector(".container")?.scrollIntoView(true);
                } else if (this.$route.name === "editing") {
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
    background-image: url('../../public/mainzip.jpg');
    background-size: cover;
    width: 100%;
    height: 80vh;
    border-radius: 5px;
    padding: 0;
}

.sloganBox {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

p {
    position: relative;
    color: white;
    opacity: 0.8;
    font-size: 4vh;
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
</style>