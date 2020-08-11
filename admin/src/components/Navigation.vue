<template>
    <div class="nav__wrapper">
        <router-link to="/" 
                class="nav__link"
                :class="{'nav__link-current': $route.name === 'Select Client'}"
                tag="a"
                >Select Client</router-link>
        <router-link to="/newclient" 
                class="nav__link"
                :class="{'nav__link-current': $route.name === 'New Client'}"
                tag="a"
                >New Client</router-link>
        <router-link to="/settings" 
                class="nav__link"
                :class="{'nav__link-current': $route.name === 'Admin Settings', 'nav__link-disabled': !$store.getters.clientSelected}"
                tag="a"

                >Settings</router-link>
        <!-- v-if="this.$route.name != 'settings' " -->
        <router-link to="/users" 
                class="nav__link"
                :class="{'nav__link-current': $route.name === 'Visitors IPs', 'nav__link-disabled': !$store.getters.clientSelected}"
                tag="a"
                >Visitors</router-link>
        <a  
        class="nav__link"
        href="https://micad-prelaunch.herokuapp.com/client"
        >Client View</a>
        <!-- <a  
        class="nav__link"
        href="http://localhost:8081/"
        >Client View</a> -->
    </div>
</template>

<script>
export default {

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
            &-disabled {
                background-color: rgba($color-white, .1);
                cursor: default;
                border: 1rem black;

                &:hover {
                    color: $color-white;
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