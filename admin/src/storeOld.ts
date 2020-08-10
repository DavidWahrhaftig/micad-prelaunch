import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        adminSettings: {
            title: '',
            launchDate: new Date(),
            enable: false,
            urls: []
        },
        users: []
    },
    getters: {
        
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setAdminSettings(state, settings) {
            state.adminSettings = settings;
        }
    },
    actions: {
        async fetchUsers({commit}) {
            const res = await axios.get('/users');
            if (res.data.success) {
                commit('setUsers', res.data.users);
            }
        },
        async fetchAdminSettings({commit}) {
            const res = await axios.get('/');
            if (res.data.success) {
                const {
                    enable,
                    title,
                    launchDate,
                    urls,
                } = res.data.config
                commit('setAdminSettings', {enable, title, launchDate, urls})
            }
        },
        async updateAdminSettings({state}) {
            const res = await axios.put('/', state.adminSettings);
            console.log(res.data.msg);
        }

        
    }
});

