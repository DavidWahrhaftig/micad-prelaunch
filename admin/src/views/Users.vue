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
                    <a href="#popup" 
                       class="visitor-ip" 
                       v-for="ipInfo in user.ips" :key="ipInfo.ip"
                       @click="selectIp(ipInfo, user)">
                        {{ ipInfo.ip }}
                    </a>
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
        <app-ip-info-popup v-if="ipSelected" :ipInfo="ipSelected"/>

    </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import IpInfoPopup from '../components/IpInfoPopup';


export default Vue.extend({
    components: {
        appIpInfoPopup: IpInfoPopup
    },
    data() {
        return {
            ipSelected: null,
        }
    },
    methods: {
        ...mapActions(['fetchUsers']),
        selectIp(ipInfo, user) {
            this.ipSelected = {...ipInfo, email: user.email};
        }
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
        // if (this.users.length > 0) this.selectIp(this.users[0].ipInfo, this.users[0])
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

        &-ip {
            display:block;
            // justify-self: center;
            text-decoration: none;
            border-bottom: 0.2rem solid transparent;
            &:hover {

                border-bottom: 0.2rem solid currentColor;
            }
        }   

        &-verified {
            // justify-self: center;
            display: grid;
            align-items: center;
        }
    }

</style>