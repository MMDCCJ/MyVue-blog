import VueRouter from "vue-router";
import blog_articlepage from '../pages/Blog-ArticlePage'
import blog_main from "../pages/Blog-Main"
import blog_me from '../pages/Blog-Me'
export default new VueRouter({
    routes:[
        {
            name:'main',
            path:'/',
            components:{
                me:blog_me,
                main:blog_main
            }
        },
        {
            name:'article',
            path:'/article/:id',
            components:{
                article:blog_articlepage
            },
            props:true
        }
    ]
})