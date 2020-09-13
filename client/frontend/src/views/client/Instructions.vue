<template>
    <div>
        <!-- <div class="message">Insturction text set by Admin</div>
        <div class="message--small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus fuga illum impedit consectetur aliquam omnis, consequuntur voluptates blanditiis porro laudantium beatae eveniet asperiores exercitationem esse eos dolor at. Quis earum non cum suscipit omnis quibusdam officia at consectetur reiciendis.
        </div> -->
        <div class="message">{{ $store.getters.clientConfig.instructionsText }}</div>
    </div>
    

</template>

<script>
import Vue from 'vue';
export default Vue.extend({

});
</script>

<style lang="scss">

</style>