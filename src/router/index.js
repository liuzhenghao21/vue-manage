import Vue from "vue";
import VueRouter from "vue-router";

// 引入路由组件
import MyMain from '@/pages/Main'
import MyUser from '@/pages/User'
import MyHome from '@/pages/Home'
Vue.use(VueRouter)

// 创建vue-router实例
export default new VueRouter({
    routes: [
        {
            path: '',
            component: MyMain,
            children: [
                {
                    path: '/',
                    name:'home',
                    component:MyHome
                },
                {
                    path: '/user',
                    name:'user',
                    component:MyUser
                },
                {
                    path: '/mall',
                    name:'mall',
                    component:()=>import ('@/pages/Mall')
                },
                {
                    path: '/page1',
                    name:'page1',
                    component:()=>import ('@/pages/Others/pageOne.vue')
                },
                {
                    path: '/page2',
                    name:'page2',
                    component:()=>import ('@/pages/Others/pageTwo.vue')
                },
            ]
        },

    ]
})