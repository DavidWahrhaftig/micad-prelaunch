<template>
    <div>
        <!-- <form @submit.prevent class="form"> -->
            <!-- <div class="form__group"> -->
                <!-- <div class="form__label">
                    Select Client
                </div> -->
                <select class="form__select" v-model="selectedIndex" name="" id="">
                    <option selected value="default">Select Client</option>
                    <option v-for="(client, i) in clients" :key="i" :value="i">{{client.clientName}}</option>
                </select>
            <!-- </div>            -->
        <!-- </form> -->


        <div class="client-selection" v-if="seletectedClient">
            <h2 class="client-selection__heading">Client url to share with users:</h2>
            <div class="client-selection__display">
                <!-- <h2 class="client-selection__id">{{seletectedClient._id}}</h2> -->
                <h2 class="client-selection__id">{{clientUrl}}</h2>
                <button class="button button-paste-to-clipboard" @click="copyToClipBoard(clientUrl)">Copy to Clipboard</button>
            </div>
            <button class="button button--delete u-margin-top-small" @click="alertBeforeDeleting(seletectedClient)">Delete Client</button>
        </div>
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
        ...mapGetters(['clients', 'clientUrl']),
        seletectedClient() {
            if (this.selectedIndex != 'default') return this.clients[this.selectedIndex];
            return null;
        },
        // clientUrl() {
        //     return `${window.location.origin}/${this.seletectedClient._id}`
        // }
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
        ...mapActions(['fetchClients', 'chooseClient', 'deselectClient', 'deleteClient']),
        // selectClient() {
        //     if (this.seletectedClient) {
        //         this.chooseClient(this.seletectedClient);
        //         this.$router.push('/settings');
        //     } else {
        //         console.log("must select a client");
        //     }
        // },
        async copyToClipBoard(content) {
            window.navigator.clipboard.writeText(content);
        },
        async alertBeforeDeleting(client) {
            const del = confirm(`Are you sure you want to delete the client ${client.clientName}? This will also delete all of ${client.clientName}'s users.`);
            if (del) {
                await this.deleteClient(client._id);
            }
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

    .client-selection {

         width: 37rem;
         margin: 2rem auto;
         

         @include respond(tab-port) {
            width: 50rem;
         }

        &__heading {
            font-size: 1.8rem;
            text-align: left;
            // text-align: center;
            display: block;
        }

        &__display {
            width: 100%; 
            @include respond(tab-port) {
                display: flex;
                // justify-content: space-between;
                // justify-content: center;
                align-items: stretch;
                // width: 100%;
            }            
        }

        &__id {
            // display: inline-block;
            color: $color-primary;
            font-size: 1.3rem;
            font-weight: 600;
            font-family: 'Comfortaa', cursive;
            background-color: $color-secondary-light;
            padding: 0.5rem;
            width: 100%;
            // to center text inside a stretch flex item
            display: flex;
            align-items: center;
        }
    }

   
</style>