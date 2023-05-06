<template>
    <div id="me">
        <div id="top">
            <h1>MMDCCJ</h1>
            <p>我站在你左侧，却像隔着银河</p>
        </div>
        <div id="contact">
            <a href=";" title="邮箱"><i class="el-icon-message"></i></a>
            <a href="https://github.com/MMDCCJ" id="github" title="github">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-github"
                    viewBox="0 0 16 16">
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Blog-Me',
};
</script>
<style lang='css' scoped>
#me {
    /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
    width: 55rem;
    height: 15rem;
    border: 1px solid white;
    margin: 10rem auto 5rem;
    display: flex;
    flex-direction: column;
}
#top{
    flex: 7;
    box-sizing: border-box;
}
#contact {
    margin-left: 5rem;
    /* margin-top: 4rem; */
    flex: 3;
    /* line-height: 6rem; */
}

#contact>a {
    margin-right: 2rem;
}

#github {
    color: white;

}

h1 {
    
    margin-left: 5rem;
    color: white;
    font-size: 29px;
    margin-bottom: 2.5rem;
}

i {
    color: white;
    font-size: 34px;
}

p {
    margin-left: 5rem;
    color: gray;
    font-size: 19px;
}
</style>