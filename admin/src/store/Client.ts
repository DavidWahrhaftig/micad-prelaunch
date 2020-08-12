import axios from 'axios';
import router from '../router';

const state = {
    clientSelected: null,
    clients: [],
    users: []
}
const getters = {
    clientSelected(state: any): any {
        return state.clientSelected;
    },
    clients(state: any): any {
        return state.clients;
    },
    users(state: any): any {
        return state.users;
    }

}
const mutations = {
    setClientSelected(state: any, client: any) {
        // state.clientID = config._id || '';
        state.clientSelected = client;
    },
    setClients(state: any, clients: any) {
        state.clients = clients;
    },
    setUsers(state: any, users: any) {
        state.users = users;
    }
}
const actions = {
    async fetchClients({commit}: any) {
        try {
            const res = await axios.get('/api/admin/clients');
            if (res.data.success) {
                commit('setClients', res.data.clients);
            }
        } catch(err) {
            console.log(err);
        }
    },
    async createClient({commit, dispatch}: any, clientName: string) {
        try {
            if (clientName == '') {
                console.log('name is empty');
                return;
            }
            const res = await axios.post('/api/admin/', {clientName: clientName});
            if (res.data.success) {
                await dispatch('fetchClients');
                router.push('/');
            }
        } catch(err) {
            console.log(err);
        }
    },
    async doesClientNameExist({commit}: any, clientName: string) {
        try {
            const res = await axios.get(`/api/admin/nameValid/${clientName}`);
            return res.data.unique;
        } catch(err) {
            console.log(err);
        }
    },
    async updateClient({dispatch}: any, modifiedClient: any) {
        try {
            const res = await axios.put(`/api/admin/${modifiedClient._id}`, modifiedClient);
            if (res.data.success) {
                await dispatch('fetchClients');
                return true;
            }
        }
        catch(err) {
            console.log(err);
            return false;
        }
    },
    async fetchUsers({commit}: any, clientID: string) {
        try {
            const res = await axios.get(`/api/admin/${clientID}/users`)
            if(res.data.success) {
                commit('setUsers', res.data.users);
            }
        } catch(err) {
            console.log(err);
        }
    },
    async chooseClient({commit, dispatch}: any, client: any) {
        commit('setClientSelected', client);
        await dispatch('fetchUsers', client._id);
    },
    deselectClient({commit}: any) {
        commit('setClientSelected', null);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}