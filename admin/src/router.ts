import Vue from 'vue';
import VueRouter from 'vue-router';
import Users from './views/Users.vue';
import Settings from './views/Settings.vue';
import Home from './views/Home.vue';
import SelectClient from './views/SelectClient.vue';
import NewClient from './views/NewClient.vue';
import store from './store';
// import Form from './components/Form.vue';

Vue.use(VueRouter);

const routes = [
    {
        path:'',
        name: 'Select Client',
        component: SelectClient
    },
    {
        path:'/newclient',
        name: 'New Client',
        component: NewClient
    },
    {
        path:'/settings',
        name: 'Admin Settings',
        component: Settings,
        beforeEnter: (to: any, from: any, next: any) => {
            if (store.getters.clientSelected) {
                next();
            } else {
                console.log('must select client first');
                next({name: 'Select Client'})
            }
        }
    },
    {
        path:'/users',
        name: 'Visitors IPs',
        component: Users,
        beforeEnter: (to: any, from: any, next: any) => {
            if (store.getters.clientSelected) {
                next();
            } else {
                console.log('must select client first');
                next({name: 'Select Client'})
            }
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL + 'admin',
    routes
  })
  
  
  
  export default router;