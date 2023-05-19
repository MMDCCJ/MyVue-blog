import VueRouter from "vue-router";
import blog_articlepage from '../pages/Blog-ArticlePage'
import blog_main from "../pages/Blog-Main"
import blog_me from '../pages/Blog-Me'
import blog_edite from '../pages/Blog-Article-Editing.vue'
import blog_pageNation from '../pages/Blog-Pagenation.vue'
export default new VueRouter({
    routes:[
        {
            name:'main',
            path:'/',
            components:{
                me:blog_me,
                main:blog_main,
                pageNation:blog_pageNation
            }
        },
        {
            name:'article',
            path:'/article/:id',
            components:{
                article:blog_articlepage
            },
            props:true
        },
        {
            name:"editing",
            path:'/editing',
            components:{
                editing:blog_edite
            }
        }
    ]
})