<template>
    <div class="grid__wrapper">
        <app-nav class="grid__item grid__item--menu"/>
        <app-content class="grid__item grid__item--view"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import Header from './components/Header.vue';
import Nav from '@/components/Navigation.vue';
import Content from '@/components/Content.vue';
import { mapActions } from 'vuex';

export default Vue.extend({
    name: 'App',
    components: {
        // appHeader: Header,
        appNav: Nav,
        appContent: Content
    },    

    methods: {
        ...mapActions(['fetchClient'])
    },

    async created() {
        // if (this.$store.getters.isClientIdentified) {
        //     await this.fetchClient(this.$store.getters.clientID);
        // } else if (this.$route.name !== 'identify client') {
        //     this.$router.push({name: 'identify client'});
        // }
    }
    
});
</script>

<style lang="scss">
    .grid {
        &__wrapper {
            @include page-paddings;
            
            & > * {
                padding: 4rem 2rem;                
            }
            @include respond(tab-land){
                min-height: 40rem;
                margin: 0 auto;
                // max-width: 130rem;
                display: grid;
                grid-template-columns: 1fr 2fr;
                grid-template-areas: 
                    "menu view"
                    // "countdown countdown";
            }
        }

        &__item {
            &--menu {
                grid-area: menu;
                // background-color: $color-primary-grey;
                // background-color: $color-primary;
                background: -webkit-radial-gradient(bottom left,$color-primary-light, $color-primary);
                background: radial-gradient(at bottom left, #225fbb, $color-primary);
                padding: 0rem;
                @include respond(tab-port) {
                    overflow: hidden;
                    // border-top-left-radius: 0.5rem;
                    // border-top-right-radius: 0.5rem;
                }
                @include respond(tab-land) {
                    // border-top-left-radius: 0.5rem;
                    // border-bottom-left-radius: 0.5rem;
                    // border-top-right-radius: 0;
                }
            }
            &--view {
                grid-area: view;
                background-color: $color-grey-light;
                // background-color: $color-grey-romanian;
                @include respond(tab-port) {
                    // border-bottom-left-radius: 0.5rem;
                    // border-bottom-right-radius: 0.5rem;
                } 
                @include respond(tab-land) {
                    // border-top-right-radius: 0.5rem;
                    // border-bottom-right-radius: 0.5rem;
                    // border-bottom-left-radius: 0;

                    padding: 2rem 6rem 4rem 6rem;

                } 
            }
        }
    }
</style>
