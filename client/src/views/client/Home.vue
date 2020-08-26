<template>
    <div v-if="$store.getters.clientConfig">
        <!-- <div class="message">Welcome text set by Admin</div> -->
        <h1>Hello <span class="client-name">{{$store.getters.clientConfig.clientName}}</span> user</h1>
        <p class="message">{{ $store.getters.clientConfig.welcomeText }}</p>

        <app-countdown 
            v-if="$store.getters.clientConfig"
            :launchDate="launchDate" 
            :urls="$store.getters.clientConfig.urls"/>
    </div>
</template>

<script>
import Vue from 'vue';
import Countdown from '@/components/Countdown.vue';
export default Vue.extend({
    components: {
        appCountdown: Countdown
    },
    computed: {
        launchDate() {
            if (this.$store.state.Client.clientConfig.launchDate) {
                const dateString =  this.$store.state.Client.clientConfig.launchDate.split('-').join('/');
                return new Date(dateString);
            }
            return null;
            
            
        }
    }
});
</script>

<style lang="scss">
    .client-name {
        color: $color-primary;
    }
</style>