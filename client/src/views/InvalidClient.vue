<template>
    <div class="u-margin-top-medium">
        <h1 v-if="message">{{ message }}</h1>
        <h1 v-else>Invalid Client ID: {{ $route.params.clientID }}</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'InvalidClient',
   
    props: ['message']
    
});
</script>