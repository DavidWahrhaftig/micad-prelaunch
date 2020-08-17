<template>
    <div>
        <h3 v-if="users.length == 0">No visitors have registered</h3>
        <div class="visitors u-margin-bottom-medium">
            <div class="visitor visitor--title">
                <div>
                    Email
                </div>
                <div>
                    IPS
                </div>
                <div>
                    Auth Verified
                </div>
            </div>
            <div class="visitor" v-for="(user, i) in users" :key="i">
                <div class="visitor-email">
                    {{ user.email }}
                </div>
                <div class="visitor-ips">
                    <div class="visitor-ip" v-for="ipInfo in user.ips" :key="ipInfo.ip">
                        {{ ipInfo.ip }}
                    </div>
                </div>
                <div class="visitor-verified">
                    <input readonly 
                           type="checkbox" 
                           class="form__checkbox"
                           style="display: block;" 
                           v-for="ipInfo in user.ips" :key="ipInfo.ip"
                           :checked="ipInfo.authUrlVerified"/>
                </div>
            </div>
        </div>
        

        <button class="button" @click="fetchUsers($store.getters.clientSelected._id)">
            Refresh
        </button>
        <!-- <button class="button" @click="fetchUsers($store.getters.clientSelected._id)">
            Copy IPS
        </button> -->
    </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
    methods: {
        ...mapActions(['fetchUsers'])
    },
    computed: {
        ...mapGetters(['users']),
        ips() {
            return [].concat(...this.users.map(user => {
                // const user = {email: user.email, ips: user.ips}
                return [].concat(...user.ips.map(ip => {
                    return {ip, email: user.email}
                }));
            }));
        }
    },
    async created() {
        // await this.fetchUsers(this.$store.getters.clientSelected._id);
        console.log('created');
    }
});
</script>

<style lang="scss">

    .visitor {
        display: grid;
        // width: 100%;
        margin: 0 auto;
        grid-template-columns: 40% 35% 25%;

        @include respond(tab-land) {
            grid-template-columns: 30% 40% 30%;
        }
        font-size: $default-font-size;
        color: $color-primary; 
        background-color: rgba($color-secondary, 0.3);
        // justify-items: start;
        justify-items: center;
        padding: 0.5rem;
        
        // &:not(:last-child) {
        //     margin-bottom: 1rem;
        // }

        &:nth-child(odd) {
            // background-color: rgba($color-secondary, 0.6);
            background-color: $color-secondary-light;
        } 
        &:nth-child(even) {
            // background-color: rgba($color-secondary, 0.3);
            background-color: $color-secondary-lighter;
        }

       


        &--title {
            color: $color-black; 
            // & > * {
            //     justify-self: center;
            // }
            
        }
        &-email {
            color: $color-secondary-dark;
            padding-left: 1rem;
            // justify-self: center;
        }

        &-ips {
            // justify-self: center;
        }

        &-verified {
            // justify-self: center;
            display: grid;
            align-items: center;
        }
    }

</style>