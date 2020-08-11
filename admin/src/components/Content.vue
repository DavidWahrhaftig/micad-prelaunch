<template>
    <div class="content">
        <div class="current-client" v-if="$store.getters.clientSelected">Client: {{ $store.getters.clientSelected.clientName}}</div>
        <div class="heading-primary--sub u-margin-bottom-small">
            {{$route.name}}
        </div>
        <!-- <keep-alive include="SelectClient"> -->
        <router-view></router-view>
        <!-- </keep-alive> -->
    </div>
</template>

<script>
export default {

}
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