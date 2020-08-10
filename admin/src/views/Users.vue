<template>
    <div>
        <h3 v-if="users.length == 0">No visitors have registered</h3>
        <ul class="ip__list u-margin-bottom-big">
            <li class="ip__item" v-for="({ip, email}, i) in ips" :key="i">{{ ip }} <span class="ip__item--email">{{email}}</span> </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
    // methods: {
    //     ...mapActions(['fetchUsers'])
    // },
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
    // async created() {
    //     await this.fetchUsers(this.$store.getters.clientSelected._id);
    // }
});
</script>

<style lang="scss">
    .ip {
        &__list {
             list-style-type: none;
                          
        }

        &__item {

            &:not(:last-child) {
                margin-bottom: 1rem;
            }

            width: 36rem;
            margin: 0 auto; 
            padding: 1rem 2rem; 
            font-size: $default-font-size;
            color: $color-primary; 
            background-color: rgba($color-secondary, 0.3);
            // border-radius: $edge-roundness;

            &--email {
                color: $color-secondary-dark;
            }
          
        }
    }

</style>