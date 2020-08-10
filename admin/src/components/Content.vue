<template>
    <div>
        <div class="heading-primary--sub u-margin-bottom-small">
            {{$route.name}}
        </div>
        <keep-alive include="SelectClient">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>