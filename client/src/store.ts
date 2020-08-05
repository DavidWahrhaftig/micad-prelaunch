import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        email: '',
        currentIP: '',
        fetchedUser: null,
        submitSuccess: false,
        message: '',
        clientConfig: null,
        clientID: localStorage.getItem('clientID') || ''
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
        clientID(state): string {
            return state.clientID;
        },
        isClientIdentified(state): boolean {
            return state.clientID != '';
        }
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
        setClientConfig(state, config) {
            // state.clientID = config._id || '';
            state.clientConfig = config;
        },
        setClientID(state, clientID) {
            state.clientID = clientID;
            // set local storage, header?
        }

    },
    actions: {
        async createUser({commit, state, getters}) {
            console.log("getters.isEmailValid", getters.isEmailValid);
            if (!getters.isEmailValid) return;
            
            const res = await axios.post(`/api/users/${state.clientID}`, {email: state.email, ip: state.currentIP});
            console.log(res.headers);
            //console.log(res);

            console.log(res.data)
            
            // commit mutations
            commit('setSubmitSuccess', res.data.success);
            commit('setMessage', res.data.msg);
            // state.submitSuccess = res.data.success;
        },
        async updateUser({commit, state}, overwrite) {
            const res = await axios.put(`/api/users/${state.clientID}`, {email: state.email, ip: state.currentIP, overwriteIP: overwrite});
            console.log(res.data)
            
            // commit mutations
            commit('setSubmitSuccess', res.data.success);
            commit('setMessage', res.data.msg);
            // state.submitSuccess = res.data.success;
            
        },

        async fetchClient({commit, state}, clientID) {
            const res = await axios.get(`api/admin/${clientID}`);
            console.log(res.data);
            if (res.data.success) {
                // commit("setClientID", clientID);
                if (res.data.client) {
                    commit("setClientConfig", res.data.client);
                    commit("setClientID", res.data.client._id);
                    localStorage.setItem('clientID', res.data.client._id);

                    if (router.currentRoute.path != '/') {
                        router.push('/');
                    }  
                } else {
                    console.log("this client id is invalid");
                }
                
            }
        },

        removeClientID({commit, state}) {
            localStorage.removeItem('clientID');
            commit('setClientID', '');
            commit('setClientConfig', null);
            router.push('/login');

        }
        
    }
});

