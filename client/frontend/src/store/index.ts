import Vue from 'vue'
import Vuex from 'vuex'
import Client from './Client';
import User from './User';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        success: true,
        errorMessage: ''
    },
    getters: {
        isSuccess(state: any): boolean {
            return state.success;
        },
        errorMessage(state: any): string {
            return state.errorMessage;
        }
    },
    mutations: {
        setSuccess(state: any, value) {
            state.success = value;
        },
        setErrorMessage(state: any, message) {
            state.errorMessage = message;
        }
    },
    modules: {
        Client,
        User
    }
})
