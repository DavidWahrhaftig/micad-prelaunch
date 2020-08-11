<template>
    <div class="content">
        <div class="current-client">{{clientDisplay}}</div>
        <div class="heading-primary--sub-big u-margin-bottom-small">
            {{contentTitle}}
        </div>
        <!-- <keep-alive include="SelectClient"> -->
        <router-view></router-view>
        <!-- </keep-alive> -->
    </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    computed: {
        contentTitle() {
            // const clientName = this.$store.getters.clientSelected.clientName;
            if (this.$route.name == 'Admin Settings') {
                return `Settings for ${this.clientName}`;
            } else if (this.$route.name == 'Visitors IPs') {
                return `${this.clientName} Visitors IPs`;
            }
            else {
                return this.$route.name;
            }
        },
        clientDisplay() {
            if (this.$store.getters.clientSelected) return `Client: ${this.$store.getters.clientSelected.clientName}`;
            return '';
        },
        clientName() {
            return this.$store.getters.clientSelected.clientName;
        }
    }
});
</script>

<style lang="scss">
    .content {
        position: relative;
    }
    .current-client {
        // z-index: 10;
        // display:inline-block;
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1.8rem;
        font-weight: 600;
        color: $color-primary;

    }
</style>