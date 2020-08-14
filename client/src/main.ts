import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false

// Setting up default vue's http modules for api calls
// Vue.prototype.$http = axios; 

// Vue.prototype.$http.defaults.headers.common['X-API-KEY'] = 'aeee6804a5b0fe4738dbcf0827b68ea0';

// const clientID  = localStorage.getItem("clientID");
// // If there is any token then we will simply append default axios authorization headers
// if (clientID) {
//     Vue.prototype.$http.defaults.headers.common['Authorization'] = clientID;
// }

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
