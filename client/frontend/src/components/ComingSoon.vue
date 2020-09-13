<template>
  <div class="heading-primary ">
        <!-- <div class="heading-primary--main">
            Coming soon! <span class="ipr-36">IPR 3.6</span>
        </div> -->
        <div class="heading-primary--main u-color-white" v-if="$store.state.adminSettings">
            <!-- Coming soon! <span class="ipr-36">IPR 3.6</span> -->
            {{$store.state.adminSettings.title}}
        </div>

        <div class="heading-primary--sub u-color-white">
            Our place is your new space
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .ipr-36 {
        display: inline-block;
        
        font-family: 'Comfortaa', cursive;
        text-transform: lowercase;
        
    }

    

</style>