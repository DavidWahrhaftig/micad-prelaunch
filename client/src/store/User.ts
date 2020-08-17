import axios from 'axios';
import router from '../router';

const state = {
    email: '',
    currentIP: '',
    currentPlatform: null,
    fetchedUser: null,
    submitSuccess: false,
    message: ''
}
const getters = {
    email(state: any): string {
        return state.email;
    },
    currentIP(state: any): string {
        return state.currentIP;
    },
    currentPlatform(state: any): any {
        return state.currentPlatform;
    },
    fetchedUser(state: any) {
        return state.fetchedUser;
    },
    submitSuccess(state: any): boolean {
        return state.submitSuccess;
    },

    isEmailValid(state: any): boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(state.email);
    },
    message(state: any): string {
        return state.message;
    }    
}
const mutations = {
    setEmail(state: any, email: string) {
        state.email = email;
        // @input="username=$event.target.value"
    },
    setCurrentIP(state: any, ip: string) {
        state.currentIP = ip;
    },
    setCurrentPlatform(state: any, platform: any) {
        state.currentPlatform = platform;
    },
    setFetchedUser(state: any, user: any) {
        state.fetchedUser = user;
    },
    setSubmitSuccess(state: any, status: boolean) {
        state.submitSuccess = status;
    },
    setMessage(state: any, msg: string) {
        state.message = msg;
    },
}
const actions = {
    async createUser({commit, getters}: any) {
        try {
            console.log("getters.isEmailValid", getters.isEmailValid);
            if (!getters.isEmailValid) return;
            const res = await axios.post(`/api/users/${getters.clientID}`, {email: getters.email, ip: getters.currentIP, platform: getters.currentPlatform});
            // commit mutations
            commit('setSubmitSuccess', res.data.success);
            commit('setMessage', res.data.msg);
            commit('setFetchedUser', res.data.user);
            // state.submitSuccess = res.data.success;

            return true;
        } catch(err) {
            console.log(err);
            commit('setSubmitSuccess',false);
            commit('setMessage', err.message);
            return false;
        }
        
        
        
    },
    async updateUser({commit, getters}: any, overwrite: boolean) {
        try {
            const res = await axios.put(`/api/users/${getters.clientID}`, {email: getters.email, ip: getters.currentIP, platform: getters.currentPlatform, overwriteIP: overwrite});
            console.log(res.data)
            
            // commit mutations
            commit('setSubmitSuccess', res.data.success);
            commit('setMessage', res.data.msg);
            commit('setFetchedUser', res.data.user);
            return true
        } catch(err){
            console.log(err);
            
            commit('setSubmitSuccess',false);
            commit('setMessage', err.message);
            return false;

        }        
    },
    async verifyAuthUrl({commit, getters}: any, verification: boolean) {
        try {
            const res = await axios.put(`/api/users/verifyAuthURL/${getters.fetchedUser._id}`, {ip: getters.currentIP, verification});
            if (res.data.success) {
                commit('setSubmitSuccess', res.data.success);
                commit('setMessage', res.data.msg);
                commit('setFetchedUser', res.data.user);
                return true;
            }
            return false;
        } catch(err){
            console.log(err);
            commit('setSubmitSuccess', false);
            return false;
        }
        

    }
    
}

export default {
    state,
    getters,
    mutations,
    actions
}