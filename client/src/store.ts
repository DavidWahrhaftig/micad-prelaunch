import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        email: '',
        currentIP: '',
        fetchedUser: null,
        submitSuccess: false,
        message: '',
        adminSettings: null
    },
    getters: {
        email(state): string {
            return state.email;
        },
        currentIP(state): string {
            return state.currentIP;
        },
        fetchedUser(state) {
            return state.fetchedUser;
        },
        submitSuccess(state): boolean {
            return state.submitSuccess;
        },

        isEmailValid(state): boolean {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(state.email);
        },
        message(state): string {
            return state.message;
        },
        // date(state): Date{
        //     return new Date(state.adminSettings.launchDate);
        // }
    },
    mutations: {
        setEmail(state, email) {
            state.email = email;
            // @input="username=$event.target.value"
        },
        setCurrentIP(state, ip: string) {
            state.currentIP = ip;
        },
        setFetchedUser(state, user) {
            state.fetchedUser = user;
        },
        setSubmitSuccess(state, status: boolean) {
            state.submitSuccess = status;
        },
        setMessage(state, msg: string) {
            state.message = msg;
        },
        setAdminSettings(state, config) {
            state.adminSettings = config;
        }
    },
    actions: {

        async createUser({commit, state, getters}) {
            console.log("getters.isEmailValid", getters.isEmailValid);
            if (!getters.isEmailValid) return;
            
            const res = await axios.post('/api/users', {email: state.email, ip: state.currentIP});
            console.log(res.headers);
            //console.log(res);

            console.log(res.data)
            
            // commit mutations
            commit('setSubmitSuccess', res.data.success);
            commit('setMessage', res.data.msg);
            // state.submitSuccess = res.data.success;
        },
        async updateUser({commit, state}, overwrite) {
            const res = await axios.put('/api/users', {email: state.email, ip: state.currentIP, overwriteIP: overwrite});
            console.log(res.data)
            
            // commit mutations
            commit('setSubmitSuccess', res.data.success);
            commit('setMessage', res.data.msg);
            // state.submitSuccess = res.data.success;
            
        },
        async fetchAdminSettings({commit, state}) {
            const res = await (await axios.get('api/admin/'));
            if (res.data.success) {
                commit("setAdminSettings", res.data.config);
            }
        }
        
    }
});

