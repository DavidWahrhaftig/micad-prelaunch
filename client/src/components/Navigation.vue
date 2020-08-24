<template>
    <div>
        <div class="nav__wrapper" v-if="$store.getters.clientConfig">

            <router-link to="/" 
                        class="nav__link"
                        :class="{'nav__link-current': $route.name == 'welcome'}"
                        tag="a"
                        ><span>Welcome</span></router-link>
                
            <router-link to="/details" 
                    class="nav__link"
                    :class="{'nav__link-current': $route.name == 'details'}"
                    tag="a"
                    >Your Details</router-link>
            <router-link to="/instructions" 
                    class="nav__link"
                    :class="{'nav__link-current': $route.name == 'instructions'}"
                    tag="a"
                    >Instructions</router-link>
            <a  class="nav__link"
                :href="$store.getters.clientConfig.faq"
                target="_blank"
                >On-boarding FAQ</a>
            <a  class="nav__link"
                :href="$store.getters.clientConfig.releaseNotes"
                target="_blank"
                >Release Notes</a>
            <a  class="nav__link"
                href="https://micad.co.uk/"
                target="_blank"
                >micad Website</a>
            <a  class="nav__link"
                href="https://support.zoho.com/portal/micad/en/signin"
                target="_blank"
                >Contact Support</a>
            <a  class="nav__link"
                href="#"
                @click="removeClientID"
                >Change Client</a>
        </div>
        
        <div class="nav__wrapper" v-else>
            <router-link to="/login" 
                    class="nav__link"
                    :class="{'nav__link-current': $route.name == 'identify client'}"
                    tag="a"
                    >Identify Client</router-link>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(['removeClientID'])
    }
}
</script>

<style lang="scss">
    .nav {
        &__link {
            // width: 60%;
            font-size: 1.8rem;
            text-decoration: none;
            color: $color-white;
            padding: 1rem 4.5rem;
            cursor: pointer;
            // border-radius: $edge-roundness;
            // background-color: $color-primary;
            // display: inline-block;
            // margin-right: .7rem;
            // margin-bottom: 2rem;
            transition: all 0.4s;

            @include respond(tab-port) {
                font-size: 1.5rem;
            }
            @include respond(tab-land) {
                font-size: 1.8rem;
            }
            
            &:hover {
                // color: $color-primary;
                // background-color: $color-secondary;
                @include respond(tab-land){
                    color: $color-secondary; 
                    // background-color: transparent;
                }
                
            } 

            &-current {
                // background-color: $color-secondary;
                // color: $color-white;

                // background-color: $color-grey-light;
                // color: $color-primary;
                background-color: $color-primary-dark;//$color-grey-light;
                color: $color-secondary;
                @include respond(tab-land) {
                    background-color: $color-primary-dark;//$color-grey-light;
                    // color: $color-primary;
                    color: $color-secondary;
                }

                &:hover {
                    // color: $color-primary;
                }
            }

        }

        &__wrapper {
            display: grid;
            // grid-template-columns: repeat(auto-fit, minmax(3rem, 6rem));
            // grid-gap: 1rem;
            & > * {
                    padding: 1.5rem 0;
            }
            @include respond(tab-port) {
                grid-template-columns: 1fr 1fr 1fr;
                // grid-gap: 0;
                // & > * {
                //     padding: 1.5rem 0;
                // }
            }
            @include respond(tab-land) {
                grid-template-columns: 1fr;
                grid-template-rows: repeat(6, 5rem);
                // grid-gap: 1.5rem;
                & > * {
                    padding: 1rem 0;
                }
            }

        }
    } 
    

</style>