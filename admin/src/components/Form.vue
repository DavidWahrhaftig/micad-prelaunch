<template>
    <div>
        <form class="form">
            <!-- header text -->
            <div class="form__group">
                <label for="header" class="form__label">Header</label>
                <input type="text" 
                       class="form__input" 
                       placeholder="Welcome Title" 
                       id="header"
                       v-model="client.header" 
                       >
            </div>
            <!-- public enable switch -->
            <!-- <div class="form__group form__group--switch">
                    <label for="enable" class="form__label">Client page ready</label>
                    <div class="form__switch-container">
                        <label for="publicEnable" class="form__switch">
                            <input type="checkbox" 
                                id="publicEnable"
                                class="form__switch-input"
                                v-model="client.publicEnable" 
                                >
                            <span class="form__switch-slider"></span>
                        </label>
                    </div>
            </div> -->
            <!-- welcome text -->
            <div class="form__group">
                <label for="welcomeText" class="form__label">Welcome Text</label>
                <!-- <input type="text" 
                       class="form__input" 
                       placeholder="Welcome Title" 
                       id="welcomeText"
                       v-model="client.welcomeText" 
                       > -->
                <textarea class="form__input" 
                       placeholder="Welcome text" 
                       id="welcomeText"
                       rows="4"
                       v-model="client.welcomeText"></textarea>
            </div>
            <!-- Preready text -->
            <!-- <div class="form__group" v-else>
                <label for="prereadyText" class="form__label">Pre-available Text (when site isn't ready)</label>
                <textarea class="form__input" 
                       placeholder="Pre-available text" 
                       id="prereadyText"
                       rows="4"
                       v-model="client.prereadyText"></textarea>
            </div> -->
            <!-- instructions text -->
            <div class="form__group">
                <label for="instructions" class="form__label">Instructions Text</label>
                <!-- <input type="text" 
                       class="form__input" 
                       placeholder="Instructions" 
                       id="instructions"
                       v-model="client.instructionsText" 
                       > -->
                <textarea class="form__input" 
                       placeholder="Instructions" 
                       id="instructions"
                       rows="4"
                       v-model="client.instructionsText"></textarea>
            </div>

            <!-- FAQ url -->
            <div class="form__group">
                <label for="faq" class="form__label">On-boarding FAQ link</label>
                <input type="url" 
                       class="form__input" 
                       placeholder="FAQ Link" 
                       id="faq"
                       v-model="client.faq" 
                       >
            </div>

            <!-- launchdate -->
            <div class="form__group">
                    <label for="date" class="form__label form__label-date">Launch date</label>
                    <input type="date" 
                        class="form__input" 
                        id="date"
                        :value="toDateString"
                        @input="setClientLaunchDate" 
                        >
                
            </div>
            
            <!-- sso enable switch -->
            <div class="form__group form__group--switch">
                    <label for="enable" class="form__label">Authentication</label>
                    <div class="form__switch-container">
                        <label for="ssoEnable" class="form__switch">
                            <input type="checkbox" 
                                id="ssoEnable"
                                class="form__switch-input"
                                v-model="client.ssoEnable" 
                                >
                            <span class="form__switch-slider"></span>
                        </label>
                    </div>
            </div>
            <!-- auth url -->
            <div class="form__group" v-if="client.ssoEnable">
                <label for="authUrl" class="form__label">Authentication URL</label>
                <input type="url" 
                       class="form__input" 
                       placeholder="URL" 
                       id="authUrl"
                       v-model="client.authUrl" 
                       >
            </div>
            
            <!-- URLS inputs -->
            <div class="form__group">
                <label for="urls" class="form__label">Future URLs</label>    
                <ul id="urls" class="form__url-list" v-for="(item, i) in client.urls" :key="i">
                    <li class="form__url-item">
                        <!-- Edit URL input -->
                        <input type="text" 
                            class="form__input form__url-title"
                            placeholder="Title"
                            v-model="client.urls[i].title"
                            id="url" 
                            >
                        <input type="text" 
                            class="form__input form__url-path"
                            placeholder="Edit URL"
                            v-model="client.urls[i].url"
                            id="url" 
                            >
                        <!-- <div class="form__input form__input-control">
                            <button class="form__input-control-btn form__input-control-btn--remove"
                                    @click.prevent="removeUrl(i)">
                                -
                            </button> 
                        </div> -->
                        <button class="button button-url button-url--remove"
                                @click.prevent="removeUrl(i)"> 
                            - 
                        </button>

                    </li>
                   
                </ul>
                <!-- Add URL input -->
                <li class="form__url-item">
                    <input type="text" 
                       class="form__input form__url-title form__url-title-add" 
                       placeholder="Title"
                       id="url"
                       v-model="newUrl.title" 
                       > 
                    <input type="text" 
                       class="form__input form__url-path form__url-path-add" 
                       placeholder="Add URL"
                       id="url"
                       v-model="newUrl.url" 
                       > 
                    <button class="button button-url button-url--add"
                            @click.prevent="addUrl()"> 
                        + 
                    </button>
                </li>                          
            </div>
            <!-- verifications -->
            <div class="form__group">
                <label for="verifications" class="form__label">Verifications</label>
                <div class="form__input-list">
                    <div class="form__checkbox-container" v-for="(key, i) in Object.keys(client.verifications)" :key="i">
                        <label class="form__label form__label--sub">{{ client.verifications[key].label }}</label>
                        <input type="checkbox" 
                            class="form__checkbox"
                            v-model="client.verifications[key].verify">
                    </div>
                </div>
                
            </div>
            <!-- releaseNotes url -->
            <div class="form__group">
                <label for="releaseNotes" class="form__label">Release Notes link</label>
                <input type="url" 
                       class="form__input" 
                       placeholder="Release Notes link" 
                       id="releaseNotes"
                       v-model="client.releaseNotes" 
                       >
            </div>
            <!-- Save Button -->
            <div class="form__group">
                <button 
                        class="button"
                        
                        @click.prevent="submitForm"
                        >
                    Save
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
// import axios from 'axios';
import { mapActions } from 'vuex';


export default Vue.extend({
    data() {
        return {
            // settings: {
            //     enable: false,
            //     title: 'Default',
            //     launchDate: null,
            //     urls: [],
            // },
            newUrl: {title: '', url: ''},
            client: {}
        }
    },
    computed: {
        toDateString() {
            if (!this.client.launchDate) return;
            return this.client.launchDate.substring(0,10);
        }
    },
    methods: {
        removeUrl(index) {
            this.client.urls.splice(index, 1);
        },
        addUrl() {
            if (this.newUrl.url == "") return;
            this.client.urls.push(this.newUrl);
            this.newUrl = "";
        },
        ...mapActions(['updateClient']),
        async submitForm() {
            const success = await this.updateClient(this.client);
            this.$emit('submitted', success);
        },
        setClientLaunchDate($event) {
            // const date = $event.target.value.split('-').join('/');
            // this.client.launchDate = date;
            this.client.launchDate = $event.target.value;
        }
    },

    created() {
        console.log("created")
        // await this.fetchAdminSettings();
        this.client = this.$store.getters.clientSelected;
    }
});
</script>

<style lang="scss">

    .form-old {
        width: 100%; 
        margin: 0 auto;

        // border-radius: 0.5rem;
        // background-color: $color-grey-light;
        padding: 3rem;

        @include respond(tab-port) {
            width: 80%;
            padding: 0;
        }

        @include respond(tab-land) {
            // width: 75%;
        }

        @include respond(desktop) {
            // width: 60%;
        }

        &__group:not(:last-child) {
            // display: block;
            margin-bottom: 1.5rem;
        }

        &__group {
            &-switch {
                display: flex;
                justify-content: space-between;
            }
        }

        &__switch-container {
            // display:inline-block;
            height: 4rem;
            width: 7rem;
            // float: right;
            justify-self: right;

            
            @include respond(tab-land) {
                transform: scale(0.9);
                // margin-right: 3rem;
            }
        }
        &__switch {
            position: relative;
            display: inline-block;
            // right: -6rem;
            // bottom: -3.5rem;
            width: 55px;
            height: 30px;
            // margin-right: 5rem;
            // transform: scale(0.5);
            // float: inline-end;

            // toggle area
            &-slider {
                position: absolute; 
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: $color-grey-dark-2;
                transition: .4s;
                border-radius: 5rem;

                // toggle circle
                &::before {
                    position: absolute;
                    content: "";
                    height: 24px;
                    width: 24px;
                    left: 3.5px;
                    bottom: 3px;
                    background-color: $color-white;
                    transition: 0.4s;
                    border-radius: 50px;
                }
            }

            & &-input {display: none}

            &-input:checked + &-slider {
                background-color: $color-secondary;
            }

            &-input:checked + &-slider::before {
                transform: translateX(24px);
            }
        }


        &__input {
            font-size: 2rem;
            font-family: inherit; // to overwright the browser default
            color: inherit;
            padding: 1rem 1.5rem; //more paddings on the sides of input and buttons is a nicer style
            border-radius: $edge-roundness; 
            background-color: rgba($color-white, .5);
            border: none;
            // border-bottom: 0.5rem solid transparent;
            width: 100%;
            display: block;
            transition: all 0.3s;
            outline-color: $color-secondary;

            @include respond(tab-port) {
                font-size: 1.5rem;
                padding: 1rem 2rem; //more paddings on the sides of input and buttons is a nicer style
            }

            &-url {
                width: 40%;
                // display: flex;
                margin-right: auto;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                &-add {
                    background-color: rgba($color-primary, .15);
                    outline-color: $color-primary;
                }

                @include respond(tab-port) {
                    width: 50%;
                }
                @include respond(desktop) {
                    width: 60%;
                }
            }
            &-url-title {
                width: 35%;
                margin-right: auto;
                // display: flex;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                &-add {
                    width: 35%;
                    margin-right: auto;
                    // display: flex;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    background-color: rgba($color-primary, .15);
                    outline-color: $color-primary;
                    @include respond(tab-port) {
                        width: 25%;
                    }
                }

                @include respond(tab-port) {
                    width: 25%;
                }
            }

            &-control {
                width: 15%;
                display: flex;
                // margin-left: 10%;
                padding: 0;
                border-top-right-radius: $edge-roundness;
                border-bottom-right-radius:$edge-roundness;
                // float: right;

                @include respond(tab-port) {
                    width: 6rem;
                    margin-left: auto;
                }

                &-btn {
                    // height: 100%;
                    width: 100%;
                    padding: 0;
                    border: none;
                    font-size: 3.6rem;
                    font-family: inherit; 
                    border-top-right-radius: $edge-roundness;
                    border-bottom-right-radius: $edge-roundness;
                    cursor: pointer;

                    transition: all 0.3s;
                    
                    background-color: #777;
                    color: white;
                    &--remove {
                        background-color: $color-tertiary-dark;
                        
                    }
                    &--add{
                        background-color: $color-primary;
                        
                    }

                    &:hover {
                        background-color: $color-secondary;
                    }
                    
                }
            }



            &::-webkit-input-placeholder {
                color: $color-grey-dark-2;
            }
        }
        
        &__label {
            font-size: 1.8rem;
            font-weight: bold;
            text-align: left;
            padding-left: 2rem;
            margin-bottom: 1rem;
            // margin-left: 2rem; // same position as placeholder of input
            // margin-top: 0.7rem;
            display: block; // in order to use margin properties
            transition: all 0.4s;
            // transform: translateY(-9rem);

        }
        
        /*
        // when placeholder is showing meaning nothing is being written, need to hide label
        // &__input:placeholder-shown +  &__label{ // + adjacent sibiling selector, ~ general sibiling selector
        //     opacity: 0;
        //     visibility: hidden;
        //     // transform: translateY(-4rem);

        // } */
        // &__date {
        //     font-size: 1.8rem;
        //     font-family: inherit; // to overwright the browser default
        //     color: inherit;
        //     padding: 1rem 2rem; //more paddings on the sides of input and buttons is a nicer style
        //     border-radius: 0.2rem; 
        //     background-color: rgba($color-white, .5);
        //     border: none;
        //     // border-bottom: 0.5rem solid transparent;
        //     width: 100%;
        //     display: block;

        //     // outline: none;
        //     outline-color: $color-secondary;
        // }

        &__btn {
            color: $color-white;
            background-color: $color-primary;
            border: 0.3rem solid $color-primary;


            cursor: pointer;

            // text-transform: uppercase;
            text-decoration: none;
            padding: 1.8rem 4rem; /* 15 px top and bottom and 40px left adn right*/
            display: inline-block;
            border-radius: $edge-roundness;
            
            font-size: $default-font-size;
            font-weight: 600;
            font-family: inherit;
            outline: none;

            transition: all 0.3s;

            @include respond(tab-land) {
                font-size: 1.5rem;
                padding: 0.5rem 2rem;
                width: 50%;
            }

            &-update {
                width: 100%;
                &:hover {
                    background-color: $color-secondary;
                    border-color: $color-secondary;
                }

                @include respond(tab-port) {
                    width: 75%;
                    // float: right;
                }
                @include respond(tab-land) {
                    width: 50%;
                    // float: right;
                }
            }
            // &-overwrite {
            //     width: 48%;
            //     margin: 0 0 0 2%;
            //     // background-color: $color-tertiary-light;
            //     padding: 1.8rem 1rem;
            // }
            // &-add {
            //     width: 48%;
            //     margin: 0 2% 0 0;
            //     // background-color: $color-secondary;
            //     padding: 1.8rem 1rem;
            // }

            

            &-url {
                // font-size: 3rem;
                // margin-left: 10%;
                // margin-top: 1rem;
                padding: 0rem 1rem;
                height: 100%;
                width: 15%;
                position: relative;

                &-add {
                    background-color: $color-secondary;
                    border: 0.3rem solid $color-secondary;
                    color: $color-white;
                    // position: relative;
                    // // margin-top: 3.5rem;
                    // content: "";
                    // display: inline-block;
                    // clear: both;
                    // background-color: $color-primary;
                    // width: 10%;
                
                    &::after {
                        content: '+';
                        // position: absolute;
                        // // top: 50%;
                        // // left: 50%;
                        // // transform: translate(-50%, -50%);
                        // margin-left: 2rem;
                        // width: 4rem;
                        // height: 0.5rem;
                        // background-color: $color-white;
                        // display: inline-block;
                        // content: "";
                        
                        // left: 0;
                        // transition: all 0.2s;
                        // // transform: rotate(90deg);
                    }
                }

                &-remove {
                    background-color: $color-tertiary-dark;
                    border-color: $color-tertiary-dark;
                    color: $color-white;
                    &::after {
                        content: '-';
                    }
                }
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

        &__url {
            &-list {
                list-style-type: none;
            }
            &-item {
                margin-bottom: 1rem;
                // text-decoration: none;
                box-sizing: border-box;
                display: flex;
                flex-wrap: wrap;
                // justify-content: center; 
                // align-items: stretch; 

                &:hover {
                    background-color: papayawhip;
                }
            }
        }
    }
    
</style>