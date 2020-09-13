import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

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
