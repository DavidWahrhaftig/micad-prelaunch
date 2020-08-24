<template>
    <div>
        <!-- Enter client ID -->
        <form @submit.prevent class="form" action="#">
            <div class="form__group client-selection client-selection__display">
                <!-- <label for="clientID" class="form__label">Client ID</label> -->
                
                <input type="text" 
                       class="form__input client-selection__input" 
                       placeholder="Client ID" 
                       id="clientID"
                       v-model="clientID"
                       required>
                <button class="button button-copy-to-clipboard" @click.prevent="pasteFromClipboard">paste from clipboard</button>
                
            </div>
            <button class="button" @click.prevent="fetchClient(clientID)" >
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
        ...mapActions(['fetchClient']),
        async pasteFromClipboard() {
            this.clientID = await navigator.clipboard.readText();
        }
    }
}
</script>

<style lang="scss">
    .client-selection {

        //  width: 42rem;
         width: 100%;
         margin: 2rem auto;

        @include respond(tab-land) {
            width: 42rem;
        }

        &__display {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
        }

        &__input {
            width: 80% !important;
            @include respond(tab-land) {
                width: 28rem !important;
            }

        }


    }
</style>