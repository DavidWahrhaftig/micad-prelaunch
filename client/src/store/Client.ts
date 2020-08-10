import axios from 'axios';
import router from '../router';

const state = {
    clientConfig: null,
    clientID: localStorage.getItem('clientID') || ''

}
const getters = {
    clientID(state: any): string {
        return state.clientID;
    },
    clientConfig(state: any): any {
        return state.clientConfig;
    },
    isClientIdentified(state: any): boolean {
        return state.clientID != '';
    }    
}
const mutations = {
    setClientConfig(state: any, config: any) {
        // state.clientID = config._id || '';
        state.clientConfig = config;
    },
    setClientID(state: any, clientID: any) {
        state.clientID = clientID;
        // set local storage, header?
    }
}
const actions = {
    async fetchClient({commit}: any, clientID: string) {
        try {
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
                }           
            }
        } catch(err) {
            console.log("this client id is invalid");
            commit('setErrorMessage', 'Client ID is invalid');
        }
        // const res = await axios.get(`api/admin/${clientID}`);
        // console.log(res.data);
        // if (res.data.success) {
        //     // commit("setClientID", clientID);
        //     if (res.data.client) {
        //         commit("setClientConfig", res.data.client);
        //         commit("setClientID", res.data.client._id);
        //         localStorage.setItem('clientID', res.data.client._id);

        //         if (router.currentRoute.path != '/') {
        //             router.push('/');
        //         }   
        //     }           
        // } else {
        //     console.log("this client id is invalid");
        // }
    },

    removeClientID({commit, state}: any) {
        localStorage.removeItem('clientID');
        commit('setClientID', '');
        commit('setClientConfig', null);
        router.push({name: 'identify client'});

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}