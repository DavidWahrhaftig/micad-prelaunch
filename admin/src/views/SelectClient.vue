<template>
    <div>
        <form @submit.prevent class="form">
            <div class="form__group">
                <!-- <div class="form__label">
                    Select Client
                </div> -->
                <select class="form__select" v-model="selectedIndex" name="" id="">
                    <option selected value="default">Select Client</option>
                    <option v-for="(client, i) in clients" :key="i" :value="i">{{client.clientName}}</option>
                </select>
            </div>
            <div v-if="seletectedClient">
                <h2>Client ID to share with users:</h2>
                <h2 class="highlight">{{seletectedClient._id}}</h2>
            </div>
            <div class="form__group u-margin-top-small" v-if="$store.getters.clientSelected">
                <button class="form__btn" @click="goToSettings">
                    Go to Settings
                </button>
            </div>
            
            
        </form>
        
    </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
    name: 'SelectClient',
    data() {
        return {
            // clients: [],
            selectedIndex: 'default'
        }
    },
    computed: {
        ...mapGetters(['clients']),
        seletectedClient() {
            if (this.selectedIndex != 'default') return this.clients[this.selectedIndex];
            return null;
        }
    },
    watch: {
        async selectedIndex(newVal, oldVal) {
            if(newVal !== 'default') {
                // console.log(newVal);
                const client = this.clients[newVal];
                await this.chooseClient(client);
                // this.$router.push('/settings');
            }
            else {
                console.log('cant set client');
                this.deselectClient();
            }
        }
    },
    methods: {
        ...mapActions(['fetchClients', 'chooseClient', 'deselectClient']),
        // selectClient() {
        //     if (this.seletectedClient) {
        //         this.chooseClient(this.seletectedClient);
        //         this.$router.push('/settings');
        //     } else {
        //         console.log("must select a client");
        //     }
        // },
        goToSettings() {
            this.$router.push('/settings');
        }
    },
    async created(){
        await this.fetchClients();
        this.deselectClient();
        
    }
});
</script>

<style lang="scss">
    // .form__select {
    //     width: 50%;
    //     border: none;
    //     padding: 0.5rem 1em;
    //     border-radius: 0.3rem;
    //     &:hover {
    //         background-color: $color-secondary;
    //         color: $color-primary;
    //     }
    //     &:focus {
    //         // outline-color: $color-secondary;
    //         outline: none;
    //         background-color: $color-primary;
    //         color: $color-white;
    //     }
    // }

    .highlight {
        display: inline-block;
       
        color: $color-primary;
        // font-size: 2rem;
        font-weight: 600;
        font-family: 'Comfortaa', cursive !important;
        background-color: rgba($color-secondary, 0.7);
        padding: 0.5rem;
            
    }
</style>