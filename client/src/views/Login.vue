<template>
    <div>
        <!-- Enter client ID -->
        <form class="form" action="#">
            <div class="form__group">
                <input type="text" 
                       class="form__input" 
                       placeholder="Client ID" 
                       id="clientID"
                       v-model="clientID"
                       required>
                <label for="clientID" class="form__label">Client ID</label>
            </div>
            <button class="form__btn form__btn-submit" @click.prevent="fetchClient(clientID)" >
                Submit
            </button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            clientID: ''
        }
    },
    methods: {
        ...mapActions(['fetchClient'])
    }
}
</script>

<style>

</style>