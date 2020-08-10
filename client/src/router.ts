import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Details from './views/Details.vue';
import Instructions from './views/Instructions.vue';
import ReleaseNotes from './views/ReleaseNotes.vue';
import store from './store';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name: 'welcome',
        component: Home        
    },
    {
        path: '/login',
        name: 'identify client',
        component: Login,
        // beforeEnter: (to: any, from: any, next: any) => {
        //     if (!store.getters.isClientIdentified) next();
        //     next({name: from.name});
        // }
    },
    {
        path:'/details',
        name: 'details',
        component: Details
    },
    {
        path:'/instructions',
        name: 'instructions',
        component: Instructions
    },
    {
        path:'/releasenotes',
        name: 'release notes',
        component: ReleaseNotes
    }
]


const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name !== 'identify client' && !store.getters.isClientIdentified) {
        console.log("client id not identified");
        next({ name: 'identify client' });
    }
    // if the user is not authenticated, `next` is called twice

    next();
});
  
  
  
export default router;