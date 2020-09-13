import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
