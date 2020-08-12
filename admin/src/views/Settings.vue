<template>
    <div>        
        <app-form v-if="showForm" @submitted="submitted"/>
        <div v-else>
            <h2 class="alert u-margin-bottom-small" :class="[{'alert--success': success}, {'alert--invalid': !success}]">{{ message }}</h2>
            <button class="button" @click="showForm = true">Show Form Again</button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Form from '../components/Form.vue';
export default Vue.extend({
    data() {
        return {
            showForm: true,
            message: '',
            success: false
        }
    },
    methods: {
        submitted(isSucces) {
            this.showForm = false;
            if (isSucces) {
                this.message = 'Successfully submitted' 
            } else {
                this.message = 'Server Error: failed to submit'
            }

            this.success = isSucces;
        }
    },
    components: {
        appForm: Form
    }  
});
</script>

<style>

</style>