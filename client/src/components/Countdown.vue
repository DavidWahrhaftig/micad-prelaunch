<template>
    <div class="section-countdown">
        
        <h1 class="countdown" v-if="isLaunched">Your micad system was Launched on <span class="countdown__date">{{ prettyLaunchDate }}</span></h1>
        <h1 class="countdown" v-else><span class="countdown__days">{{remainingDays}}</span> days to launch date on <span class="countdown__date">{{ prettyLaunchDate }}</span></h1>
            
        <div>
            <h3 class="heading-primary--sub" v-if="isLaunched">Your URLs are:</h3>
            <h3 class="heading-primary--sub" v-else>Your URLs will be:</h3>
            
        </div>

       
        <div class="url-grid" v-for="(item, i) in urls" :key="i">
            <div class="url-grid__item url-grid__item--title">{{ item.title }}:</div>
            <a class="url-grid__item url-grid__item--url">{{ item.url }}</a>
        </div>
        
        
        
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    props: ['launchDate', 'urls'],
    data() {
        return {
            verified: false
        }
    },
    computed:{
        prettyLaunchDate(){
            return `${this.monthOfLaunchDate} ${this.launchDate.getDate()}, ${this.launchDate.getFullYear()}`;
        },
        monthOfLaunchDate(){
            const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return MONTH[this.launchDate.getMonth()];
        },
        remainingDays() {
            // one day Time in ms (milliseconds)
            const oneDay = 1000 * 60 * 60 * 24;
            const today = new Date();
            // count by days only
            today.setMilliseconds(0);
            today.setSeconds(0);
            today.setHours(0);
            this.launchDate.setMilliseconds(0);
            this.launchDate.setSeconds(0);
            this.launchDate.setHours(0);

            const remainingDays = (Math.round(this.launchDate.getTime() - today.getTime()) / oneDay).toFixed(0);
            return remainingDays;

        },
        isLaunched() {
            return this.remainingDays < 1;
        }
    },
    filters: {
        shortenUrl(url) {
            return url.replace("https://", "").replace(".micadipr.net/", "");
        }
    }
});
</script>

<style lang="scss">


    .countdown {
        font-size: 1.8rem;
        margin-bottom: 2rem;
        &__days, &__date {
            color: $color-primary;
            font-size: 2rem;
            font-weight: 600;
            font-family: 'Comfortaa', cursive !important;
            background-color: rgba($color-secondary, 0.7);
            padding: 0.5rem;
        }
        
    }



    .url-grid {
        margin: 0 auto;
        width: 40rem;
        display: grid;
        grid-template-columns: 8rem 35rem;
        // grid-template-areas: title url;
        justify-items: start;

        @include respond(tab-land) {
            width: 50rem;
            grid-template-columns: 10rem 50rem;
        }

        &--auth {
            margin: 0 auto;
            width: 40rem;
            display: grid;
            // grid-template-columns: 8rem 35rem 5rem;
            grid-template-columns: 25% 55% 20%;
            justify-items: stretch;
            @include respond(tab-port) {
                width: 100%;
                // width: 70rem;
                grid-template-columns: 20% 65% 15%;
            }
            // @include respond(tab-land) {
            //     width: 60rem;
            //     grid-template-columns: 10rem 40rem 10rem;
            // }
        }

        &__item {
            font-size:1.4rem;
            @include respond(tab-land) {
                font-size: 1.8rem;
            }
            &--title {
                font-weight: 600;
                // margin-right: 2rem;
                // grid-area: title;
            }

            &--url {
                // grid-area: url;
            }
        }
    }
    .url {
        
        &__list {
            list-style-type: none;
            // width: 60rem;
            
        }

        &__item {
            font-size:1.8rem;
            // text-align: left;
            &-title {
                font-weight: 600;
                margin-right: 2rem;
            }
        }

        &__link {
            &, &:link, &:visited {
                // text-decoration: none;
            }
            
        }
        
    }


</style>