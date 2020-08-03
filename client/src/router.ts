import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Details from './views/Details.vue';
import Instructions from './views/Instructions.vue';
import ReleaseNotes from './views/ReleaseNotes.vue';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name: 'welcome',
        component: Home
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
        name: 'Release Notes',
        component: ReleaseNotes
    }
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  
  
  export default router;