<template>
    <div>
        <form @submit.prevent action="#" class="form">
            <div class="form__group">
                <!-- <label for="email" class="form__label">Email address</label> -->
                <input type="email" 
                       class="form__input" 
                       placeholder="Email address" 
                       id="email" 
                       :value="email" @input="setEmail($event.target.value)"
                       required>
                
            </div>
            <div class="form__group" v-if="!ipAlreadyRecorded && !submitSuccess">
                <button @click="createUser" 
                        class="button"
                        v-if="!fetchedUser">
                    Submit
                </button>
                <div v-else>
                    <button class="button button-add"
                            @click="updateUser(false)">
                        Add IP
                    </button>
                    <button class="button button-overwrite"
                            @click="updateUser(true)">
                        Overwrite IPS
                    </button> 
                </div>
            </div>
            <div class="form__group">
                <div class="alert alert--invalid" v-if="ipAlreadyRecorded && !submitSuccess">This IP has already been recorded!</div>
                <div class="alert alert--success" v-if="submitSuccess">{{message}}</div>
            </div>

            <!-- <div class="auth-verify u-margin-bottom-small" v-if="fetchedUser && $store.getters.clientConfig.ssoEnable">
                <div class="auth-verify__item auth-verify__item--title">auth URL:</div>
                <a class="auth-verify__item auth-verify__item--url" :href="$store.getters.clientConfig.authUrl">{{$store.getters.clientConfig.authUrl}}</a>
                <div class="auth-verify__item auth-verify__itme--verify">Verify: <input class="form__checkbox" type="checkbox" v-model="fetchedUser.authUrlVerified"/></div>
            </div> -->
            <div class="auth-verify u-margin-bottom-small" v-if=" submitSuccess || ipAlreadyRecorded">
                <div class="auth-verify__url">
                    <span class="auth-verify__url--title">
                        Auth URL:
                    </span>
                    <a class="auth-verify__url--path" :href="$store.getters.clientConfig.authUrl">{{$store.getters.clientConfig.authUrl}}</a>
                </div>
                <div class="auth-verify__verification">
                    <span class="auth-verify__verification--text">Verify: </span>
                    <input class="auth-verify__verification--input form__checkbox" type="checkbox" v-model="verify"/>
                </div>
                <!-- <div class="auth-verify__item auth-verify__itme--verify">Verify: <input class="form__checkbox" type="checkbox" v-model="fetchedUser.authUrlVerified"/></div> -->
            </div>
        </form>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';


export default Vue.extend({
    // props: ['userData', 'fetchedUser', 'submitSuccess'],
    data() {
        return {
            loadedUser: false,
            verify: false
        }   
    },
    computed: {
        // ...mapState({
        //     email: state => state.User.email
        // }),
        ...mapGetters(['email', 'fetchedUser', 'currentIP', 'submitSuccess', 'isEmailValid', 'message']),
        ipAlreadyRecorded() {
            if (!this.fetchedUser) return false;
            const index = this.fetchedUser.ips.findIndex(ipInfo => {return ipInfo.ip == this.currentIP});
            // return this.fetchedUser.ips.includes(this.currentIP);
            return index != -1;
        }
    },
        methods: {
        ...mapMutations(['setEmail', 'setFetchedUser', 'setMessage', 'setSubmitSuccess']),
        ...mapActions(['createUser', 'updateUser', 'verifyAuthUrl']),

    },
    watch: {
        async "$store.state.User.email"() {
            this.setSubmitSuccess(false);
            if(this.isEmailValid) {
                console.log("valid email");
                const res = await axios.get(`/api/users/${this.$store.getters.clientID}/${this.email}`);
                this.setFetchedUser(res.data.user);

                if (res.data.user) {
                    const ipIndex = this.fetchedUser.ips.findIndex(ipInfo => {
                        return ipInfo.ip == this.currentIP;
                    });
                    console.log('index', ipIndex);
                    if (ipIndex == -1) {
                        
                        this.verify = false;
                    } else {
                        console.log('setting to: ', this.fetchedUser.ips[ipIndex].authUrlVerified)
                        this.verify = this.fetchedUser.ips[ipIndex].authUrlVerified;
                    }
                    this.loadedUser = true;
                }

            } else {
                console.log("email not valid");
                this.setFetchedUser(null);
                this.loadedUser = false;
                this.verify = false;
            }
        },
        async verify(newVal, oldVal) {

            try {
                console.log('newVal', newVal);
                console.log('oldVal', oldVal);
                if (oldVal != null) {
                    console.log('verification changed');
                    // this.setMessage('');

                    if (this.loadedUser || this.submitSuccess) {
                        const res = await this.verifyAuthUrl(newVal);
                        console.log(res);
                        // if (res.data.success) {

                        // }
                        
                    }
                }
            } catch(err) {
                console.log(err);
                this.verify = false;
            }            
        }
            
        // },
        // ipAlreadyRecorded(newVal, oldVal) {
        //     if (newVal) {
        //         this.setMessage('This IP has already been recorded!');
        //     }
        // }
    }

});
</script>

<style lang="scss">

    .auth-verify {
    
        margin: 0 auto;
        width: 100%;
        background-color: $color-secondary-light;
        padding: 1rem;

        font-size: 2.5rem;
        
        &__url {
           &--title {
               margin-right: 1rem;
               font-weight: bold;
           }

           &--path {

           }
        }

        &__verification {
            display: flex;
            margin-top: 1rem;
            justify-content: center;
            align-items: center;
            
            &--text {
                margin-right: 2rem;
            }

            &--input {

            }
        }
       
    }
    // .auth-verify {
    
    //     margin: 0 auto;
    //     width: 100%;
    //     display: grid;
    //     background-color: $color-secondary-light;
    //     padding: 2rem;
    //     // grid-template-columns: 8rem 35rem 5rem;
    //     // grid-template-columns: 25% 55% 20%;
    //     // grid-template-areas: "title url" 
    //     // "verify verify";
    //     grid-template-columns: 20% 80%;
    //     // justify-content: space-between;
    //     // align-items: center;
               

    //     &__item {
    //         font-size:$default-font-size;
    //         // font-size: 2rem;

    //         @include respond(tab-land) {
    //             font-size: 1.8rem;
    //         }
    //         &--title {
    //             // grid-area: title;
    //             font-weight: 600;
    //             // margin-right: 2rem;
    //             // grid-area: title;
    //         }

    //         &--url {
    //             // grid-area: url
    //             // grid-area: url;
    //         }

    //         &--verify {
    //             // grid-area: verify;
    //             display: flex;
    //             font-size: 3rem;
    //             justify-content: space-around;
    //             align-items: center;
    //             margin: 0 auto;
    //         }
    //     }
    // }



    .form-previous {
        width: 36rem;  
        margin: 0 auto;
        &__group:not(:last-child) {
            margin-bottom: 0.5rem;
        }

        @include respond(tab-port) {
            width: 80%;
            padding: 0;
        }

        @include respond(tab-land) {
            width: 65%;
        }

        @include respond(desktop) {
            width: 60%;
        }

        &__input {
            font-size: 2rem;
            font-family: inherit; // to overwright the browser default
            color: inherit;
            padding: 1.5rem 2rem; //more paddings on the sides of input and buttons is a nicer style
            border-radius: 0.2rem; 
            background-color: rgba($color-white, .5);
            border: none;
            border-bottom: 0.5rem solid transparent;
            width: 100%;
            display: block;
            transition: all 0.3s;
            @include respond(tab-land) {
                font-size: 1.5rem;
            }

            &:focus {
                outline: none;
                box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
                border-bottom: 0.5rem solid $color-secondary;
            }

            &:focus:invalid {
                border-color: $color-tertiary-dark;
            }

            &::-webkit-input-placeholder {
                color: $color-grey-dark-2;
            }
        }
        
        &__label {
            font-size: 1.8rem;
            font-weight: bold;
            // margin-left: 2rem; // same position as placeholder of input
            // margin-top: 0.7rem;
            display: block; // in order to use margin properties
            transition: all 0.4s;
            transform: translateY(-9rem);
            text-align: left;
            padding-left: 2rem;
        }

        // when placeholder is showing meaning nothing is being written, need to hide label
        &__input:placeholder-shown +  &__label{ // + adjacent sibiling selector, ~ general sibiling selector
            opacity: 0;
            visibility: hidden;
            transform: translateY(-4rem);

        }

        &__btn {
            // background-color: $color-primary;
            // color: $color-white;
            // border: none;
            color: $color-white;
            background-color: $color-primary;
            border: 0.3rem solid $color-primary;

            cursor: pointer;

            // text-transform: uppercase;
            text-decoration: none;
            padding: 1.8rem 4rem; /* 15 px top and bottom and 40px left adn right*/
            display: inline-block;
            border-radius: .5rem;
            
            font-size: $default-font-size;
            font-weight: 600;
            font-family: inherit;
            outline: none;

            transition: all 0.3s;

            &-submit {
                width: 100%;
                @include respond(tab-land) {
                    font-size: 1.5rem;
                    width: 25rem;
                    padding: 1rem 3rem;
                }
                
            }
            &-overwrite {
                width: 48%;
                margin: 0 0 0 2%;
                // background-color: $color-tertiary-light;
                padding: 1.8rem 1rem;
            }
            &-add {
                width: 48%;
                margin: 0 2% 0 0;
                // background-color: $color-secondary;
                padding: 1.8rem 1rem;
            }

            &:hover {
                background-color: $color-secondary;
                border-color: $color-secondary;
            }
        }

        &__message {
            font-size: 2.5rem;
            font-weight: 600;
            color: $color-secondary-dark;
            &--invalid {
                color: $color-tertiary-dark;
            }
        }
    }
    
</style>