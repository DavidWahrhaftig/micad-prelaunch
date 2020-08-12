<template>
    <div>
        <form @submit.prevent class="form">
            <div class="form__group">
                <input type="text" 
                       class="form__input" 
                       placeholder="Client Name" 
                       id="clientName"
                       v-model="clientName" 
                       >
            </div>
             <div class="form__group" v-if="!isNameValid">
                <div class="alert alert--invalid">Name already exists</div>
            </div>
            <div class="form__group">
                <button :disabled="!isNameValid" class="button" @click="createClient(clientName)">
                    Create
                </button>
            </div>            
        </form>
        
    </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
    name: 'NewClient',
    data() {
        return {
            clientName: '',
            isNameValid: true
        } 
    },
    methods: {
        ...mapActions(['createClient', 'doesClientNameExist', 'deselectClient'])
    },
    watch: {
        async clientName(newVal, oldVal) {
            if(newVal == '') return; 
            
            const valid = await this.doesClientNameExist(newVal);
            
            if(valid) {
                this.isNameValid = true;
            } else {
                console.log("client Name already exists");
                this.isNameValid = false;
            }
        }
    },
    created(){
        this.deselectClient();
        console.log('deselct client');
    }
});
</script>

<style lang="scss">
    
</style>