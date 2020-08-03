<template>
    <div>        
        <app-form />
    </div>
</template>

<script>
import Vue from 'vue';
import Form from '../components/Form.vue';
export default Vue.extend({
    components: {
        appForm: Form
    }  
});
</script>

<style>

</style>