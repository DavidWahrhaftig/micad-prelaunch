<template>
    <div v-if="$store.state.Client.clientConfig">
        <!-- <div class="message">Welcome text set by Admin</div> -->
        <h1>Hello <span class="client-name">{{$store.getters.clientConfig.clientName}}</span> user</h1>
        <p class="message">{{ $store.getters.clientConfig.welcomeText }}</p>

        <app-countdown 
            v-if="$store.state.Client.clientConfig"
            :launchDate="launchDate" 
            :urls="$store.state.Client.clientConfig.urls"/>
    </div>
</template>

<script>
import Vue from 'vue';
import Countdown from '../components/Countdown.vue';
export default Vue.extend({
    components: {
        appCountdown: Countdown
    },
    computed: {
        launchDate() {
            // const year = this.$store.state.Client.clientConfig.launchDate.substring(0,4);
            // const month = this.$store.state.Client.clientConfig.launchDate.substring(5,7);
            // const day = this.$store.state.Client.clientConfig.launchDate.substring(8,10);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            // return new Date(`${year}/${month}/${day}`);
            const dateString =  this.$store.state.Client.clientConfig.launchDate.split('-').join('/');
            return new Date(dateString);
            
        }
    }
});
</script>

<style lang="scss">
    .client-name {
        color: $color-primary;
    }
</style>