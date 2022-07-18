import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store.js';
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import bz from '../views/bz.vue'
import notFound from '../views/notFound.vue'
import HomePage from '../views/HomePage.vue'
import WorkCenter from "../views/WorkCenter.vue";
import WorkLists from "../views/WorkLists.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
        meta: { requiresAuth: false }
    },
    {
        path: '/index',
        //name: 'Index',
        component: Index,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/',
                //name: 'homePage',
                component: HomePage,
                meta: { requiresAuth: true }
            },
            {
                path: '/workcenter',
                name: 'WorkCenter',
                component: WorkCenter,
                meta: { requiresAuth: true }
            },
            {
                path: '/workLists',
                name: 'WorkLists',
                component: WorkLists,
                meta: { requiresAuth: true }
            },
        ]
    },
    {
        path: '/bz',
        name: 'bz',
        component: bz,
        meta: { requiresAuth: true }
    },
    {
        path: '/*',
        name: 'notFound',
        component: notFound,
        meta: { requiresAuth: false }
    }
]






const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        //玄学的地方
        setTimeout(() => {
            var a = store.state.token
            if (window.sessionStorage.token === a) {
                next()
            } else {
                next({ path: '/' })
            }
        }, 0)
    } else {
        next()
    }
})
export default router
