<template>
    <div>
        <div class="message">Welcome text set by Admin</div>
        <app-countdown 
            :launchDate="new Date($store.state.adminSettings.launchDate)" 
            :urls="$store.state.adminSettings.urls"/>
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

</style>