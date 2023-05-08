<template>
    <div id="intro">
        <p>{{ welcomeMsg }}</p>
        <a href="#me" id="toMain">
            <p class="el-icon-bottom float-element"></p>
        </a>
    </div>
</template>
<script>
export default {
    name: 'Blog-intro',
    data() {
        return {
            welcomeMsg: '"Cogito, ergo sum." —— 笛卡尔 (René Descartes)'
        }
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

@media screen and (max-width:1600px) {
    #intro{
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