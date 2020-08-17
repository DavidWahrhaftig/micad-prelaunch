<template>
    <div>
        <div class="details">
            <div class="detail" v-if="currentIP">
                <h4 class="detail__text">Your IP:</h4>
                <h4 class="detail__text detail__text-value">{{ currentIP }}</h4>
            </div>
            <div class="detail">
                <h4 class="detail__text">OS:</h4>
                <h4 class="detail__text detail__text-value">{{ platform.os.family }} {{ platform.os.version }}</h4>
            </div>
            <div class="detail" v-if="platform.product">
                <h4 class="detail__text">Device:</h4>
                <h4 class="detail__text detail__text-value">{{ platform.product }}</h4>
            </div>
            <div class="detail">
                <h4 class="detail__text">Browser:</h4>
                <h4 class="detail__text detail__text-value">{{platform.name}} {{ platform.version }}</h4>
            </div>
            <div class="detail">
                <h4 class="detail__text">Screen Size:</h4>
                <h4 class="detail__text detail__text-value">{{ screenSize }}</h4>
            </div>            
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import { mapMutations, mapGetters } from 'vuex';
import platform from 'platform';

export default {
    computed: {
        ...mapGetters(['currentIP', 'submitSuccess', 'currentPlatform']),
        platform() {
            // this.setCurrentPlatform(...platform);
            return {...platform};
        },
        screenSize(){
            return `${window.screen.width} x ${window.screen.height}`
        }

    },
    methods: {
        ...mapMutations(['setCurrentIP', 'setCurrentPlatform'])
    },
    async created() {
        // const res = await fetch('https://api.ipify.org/?format=json', options);
        try {
            const res = await axios.get('https://api.ipify.org/?format=json');
            console.log(res);
            this.setCurrentIP(res.data.ip);
            this.setCurrentPlatform({...platform});
            
        } catch(err) {
            console.log(err);
            this.setCurrentPlatform({...platform});
        }

        // const res2 = await axios.post('https://api.whatismybrowser.com/api/v2/user_agent_parse', )    
    }
}
</script>

<style lang="scss">

    .detail {
        // text-align: left;
        width: 40rem;
        font-size: $default-font-size;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;


        @include respond(tab-port) {
            width: 50rem;
            font-size: 2.5rem;
        }

        &__text {
            color: $color-secondary-dark;
            &-value {
                // justify-self: end;
                // display: inline-block;
                // padding-left: 1rem;
                color: $color-primary;
                // float: right;
                
            }
        }
        
    }

</style>