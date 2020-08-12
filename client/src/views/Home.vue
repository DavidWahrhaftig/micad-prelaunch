<template>
    <div v-if="$store.state.Client.clientConfig">
        <!-- <div class="message">Welcome text set by Admin</div> -->
        <h1>Hello <span class="client-name">{{$store.getters.clientConfig.clientName}}</span> user</h1>
        <p class="message">{{ $store.getters.clientConfig.welcomeText }}</p>

        <app-countdown 
            v-if="$store.state.Client.clientConfig"
            :launchDate="new Date($store.state.Client.clientConfig.launchDate)" 
            :urls="$store.state.Client.clientConfig.urls"/>
    </div>
</template>

<script>
import Vue from 'vue';
import Countdown from '../components/Countdown.vue';
export default Vue.extend({
    components: {
        appCountdown: Countdown
    }
});
</script>

<style lang="scss">
    .client-name {
        color: $color-primary;
    }
</style>