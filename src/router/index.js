import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store.js';
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import ces from '../views/ces.vue'
import notFound from '../views/notFound.vue'

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
        name: 'Index',
        component: Index,
        meta: { requiresAuth: true }
    },
    {
        path: '/a',
        name: 'ces',
        component: ces,
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
            if(window.sessionStorage.token === a){
                next()
            }else{
                next({ path: '/' })
            }
        }, 0)
    } else {
        next()
    }
})
export default router
