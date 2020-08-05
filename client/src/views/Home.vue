<template>
    <div>
        <!-- <div class="message">Welcome text set by Admin</div> -->
        <h1>Hello <span class="client-name">{{$store.state.clientConfig.clientName}}</span> user</h1>
        <app-countdown 
            v-if="$store.state.clientConfig"
            :launchDate="new Date($store.state.clientConfig.launchDate)" 
            :urls="$store.state.clientConfig.urls"/>
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