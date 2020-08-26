<template>
  <div id="app">
    <app-header class="header"/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
// import Nav from './components/Navigation.vue';
// import Content from './components/Content.vue';
// import Layout from './views/Layout.vue';
import { mapActions } from 'vuex';

export default Vue.extend({
    name: 'App',
    components: {
        appHeader: Header,
        // appNav: Nav,
        // appContent: Content,
        // appLayout: Layout
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
    
    #app {

        text-align: center;
        color: #2c3e50;
        // color: $color-grey-romanian;
        // margin-top: 45px;

        // @include respond(tab-port) {
        //     // padding: 0 4rem;
        // }
        // @include respond(tab-land) {
        //     padding: 0 8rem;
        // }
        // @include respond(desktop) {
        //     padding: 0 12rem;
        // }
        // @include respond(big-desktop) {
        //     padding: 0 20rem;
        // }
    }
</style>
