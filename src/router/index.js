import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('views/home/Home.vue')
const category = () => import('views/category/Category.vue')
const shopcart = () => import('views/cart/Cart.vue')
const profile = () => import('views/profile/Profile.vue')
const detail = ()=>import('views/detail/detail.vue')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component: home
    },
    {
        path:'/category',
        component: category
    },
    {
        path:'/shopcart',
        component: shopcart
    },
    {
        path:'/profile',
        component: profile
    },
    {
        path:'/detail/:iid',
        component: detail
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',

})

export default router