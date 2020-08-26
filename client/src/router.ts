import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/client/Home.vue';
import Details from './views/client/Details.vue';
import Instructions from './views/client/Instructions.vue';
import ClientLayout from './views/ClientLayout.vue';
import InvalidClient from './views/InvalidClient.vue';
// import Login from './views/Login.vue';

import store from './store';

Vue.use(VueRouter);

const routes = [
    {
        path:'/:clientID',
        component: ClientLayout,
        beforeEnter: async(to: any, from: any, next: any) => {
            if (store.getters.clientConfig) next();
            else {
                const clientID = to.params.clientID;
                console.log('clientID from params ', clientID);
                const success = await store.dispatch('fetchClient', clientID);
                if (success) {
                    console.log('found client and set its config');
                    next({name: 'welcome', params: {clientID}});
                } else  {
                    console.log('failed to fetch client');
                    next({name: 'Invalid Client', params: {clientID}});
                } 
            }
        },
        children: [
            {
                path:'',
                name: 'welcome',
                component: Home,
                // pathToRegexpOptions: { strict: false } 
            },
            {
                path:'details',
                name: 'details',
                component: Details
            },
            {
                path:'instructions',
                name: 'instructions',
                component: Instructions
            },
            {
                path:'*',
                redirect: ''
            },

        ],       
    },
    // {
    //     path: '/login',
    //     name: 'identify client',
    //     component: Login,
    //     // beforeEnter: (to: any, from: any, next: any) => {
    //     //     if (!store.getters.isClientIdentified) next();
    //     //     next({name: from.name});
    //     // }
    // },
    {
        path: '/invalid/:clientID',
        name: 'Invalid Client',
        component: InvalidClient,

        // beforeEnter: (to: any, from: any, next: any) => {
        //     if (!store.getters.isClientIdentified) next();
        //     next({name: from.name});
        // }
    },
    {
        path: '*',
        name: 'Error',
        component: InvalidClient,
        props: {
            message: 'Path Error: Path must be in the form \'url/:clientID\''
        }
    }
]


const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
});

// router.beforeEach(async (to, from, next) => {

//     if (to.name !== 'identify client' && !store.getters.isClientIdentified) {
//         console.log("client id not identified");
//         next({ name: 'identify client' });
//     }

//     next();
// });

// router.beforeEach(async(to, from, next) => {
//     if (store.getters.clientConfig) next();
//     else {
//         const clientID = to.params.clientID;
//         console.log('clientID from params ', clientID);
//         const success = await store.dispatch('fetchClient', clientID);
//         if (success) console.log('found client and set its config');
//         else console.log('failed to fetch client');
//         next();
//     }
// });
  
  
  
export default router;