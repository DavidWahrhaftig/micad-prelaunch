<template>
    <div>
        <div class="detail">
            <h4 v-if="currentIP != '' && !submitSuccess" class="detail__text">Your IP: <span class="detail__text-value">{{ currentIP }}</span></h4>
            <!-- <h4 v-if="currentIP != '' && !submitSuccess" class="detail__text">Your Server's IP: <span class="detail__text-value">0.0.0.0</span></h4> -->
            <h4 class="detail__text">Browser:  <span class="detail__text-value">"Chrome"</span></h4>
            <h4 class="detail__text">Browser Version:  <span class="detail__text-value">"Version"</span></h4>
            <h4 class="detail__text">OS:  <span class="detail__text-value">"Windows 10"</span></h4>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import { mapMutations, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['currentIP', 'submitSuccess']),
        browserDetails() {
            return {
                nVer: navigator.appVersion,
                nAgt: navigator.userAgent,
                browserName: navigator.appName,
                fullVersion:''+parseFloat(navigator.appVersion),
                majorVersion: parseInt(navigator.appVersion,10)

            }
        },

    },
    methods: {
        ...mapMutations(['setCurrentIP'])
    },
    async created() {
        // const res = await fetch('https://api.ipify.org/?format=json', options);
        const res = await axios.get('https://api.ipify.org/?format=json');
        console.log(res);
        // this.ip = res.data.ip; 
        this.setCurrentIP(res.data.ip);
    }
}
</script>

<style lang="scss">

    .detail {
        text-align: left;
        width: 30rem;
        margin: 0 auto;
        &__text {
            font-size: 2rem;
            color: $color-secondary-dark;
            &-value {
                // justify-self: end;
                display: inline-block;
                padding-left: 1rem;
                color: $color-primary;
                float: right;
                
            }
        }
        
    }

</style>