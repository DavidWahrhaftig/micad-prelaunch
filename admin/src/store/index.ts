import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Client from './Client';

Vue.use(Vuex)

export default new Vuex.Store({    
    modules: {
        Client
    }
})
