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
                <div class="form__message form__message--invalid">Name already exists</div>
            </div>
            <div class="form__group">
                <button class="form__btn" @click="createClient(clientName)">
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
        ...mapActions(['createClient', 'doesClientNameExist'])
    },
    watch: {
        async clientName(newVal, oldVal) {
            const valid = await this.doesClientNameExist(newVal);
            
            if(valid) {
                console.log("client Name already exists");
                this.isNameValid = false;
            } else {
                this.isNameValid = true;
            }
        }
    },
});
</script>

<style lang="scss">
    
</style>