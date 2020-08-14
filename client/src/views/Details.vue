<template>
    <div>
        <app-broswer-detail class="u-margin-bottom-medium"/>
        <app-form v-if="$store.getters.currentIP != '' "/>
        <div class="message">
            Type your email to see if you have recorded this IP in our system.
            Press submit if you want to have your current IP recorded.
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Form from '../components/Form.vue';
import BrowserDetail from '../components/BrowserDetail.vue';

export default Vue.extend({
    components: {
        appForm: Form,
        appBroswerDetail: BrowserDetail
    }
});
</script>

<style lang="scss">

</style>