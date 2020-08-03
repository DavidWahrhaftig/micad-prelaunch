import Vue from 'vue';
import VueRouter from 'vue-router';
import Users from './views/Users.vue';
import Settings from './views/Settings.vue';
import Home from './views/Home.vue';
// import Form from './components/Form.vue';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name: 'home',
        component: Home
    },
    {
        path:'/settings',
        name: 'Admin Settings',
        component: Settings
    },
    {
        path:'/users',
        name: 'Visitors IPs',
        component: Users
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  
  
  export default router;