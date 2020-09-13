<template>
    <div class="header"> 
        <!-- <app-micad-logo class="header__logo"/> -->
        <div class="header__logo">
            <img src="../assets/micad_prelauncher_logo.svg" alt="">
        </div>
        <!-- <img class="header__logo" src="../assets/micad_prelauncher_logo.svg" alt=""> -->
        <!-- <app-coming-soon class="header__title"/>  -->
        <div class="header__title">
        
            <div class="header__title--main">
                <!-- Coming soon! <span class="ipr-36">IPR 3.6</span> -->
                Micad Admin
            </div>

            <div class="header__title--sub">
                Pre-launch Application
            </div>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
    // .header {
    //     margin: 0;
    //     display: grid;
    //     background-color: $color-white;
    //     grid-template-columns: 1fr;
    //     // grid-template-rows: 1fr;
    //     grid-template-areas: "logo" "title";
    //     justify-items: center;

    //     @include respond(tab-port) {
    //         grid-template-columns: 1fr 2fr;
    //         grid-template-areas: "logo title";  
    //         // background-color: transparent; 
    //         // background: -webkit-radial-gradient(top right,$color-primary-light, $color-primary);
    //         // background: radial-gradient(at top right, #225fbb, $color-primary);         
    //     }

    //     &__logo {
    //         // background-color: $color-primary-light;
    //         border-bottom-left-radius: 1rem;
    //         border-bottom-right-radius: 1rem;
    //         padding: 1.5rem;
    //         grid-area: logo;
    //         width:42rem;
    //         @include respond(tab-port) {
    //             grid-area: logo;
    //             align-self: start;
    //             width:25rem;
    //         }
    //         @include respond(tab-land) {
    //             // margin:0;
    //             // padding: rem;
    //             padding-top: 3rem;
    //         }
    //     }
    //     &__title {
    //         grid-area: title;
    //         color: $color-primary;
    //         // text-transform: capitalize;
    //         /* for animation of chldren not to have a glitch */
    //         padding: 2rem;
    //         padding-top: 0;
    //         backface-visibility: hidden;
    //         @include respond(tab-port) {
    //             justify-self: start;
    //             // color: $color-white;
    //             padding-top: 1.5rem;
    //             // margin-left: 2rem;
    //             // align-self: st;
    //         }
    //         @include respond(tab-land) {
    //             // justify-self: start;
    //             // margin-left: 2rem;
    //             // align-self: st;
    //             text-align: left;
    //         }

    //         &--main {
    //             display: block; /* by default span is inline, block gives it a line break*/
    //             font-size: 2.5rem;
    //             font-weight: 400;
    //             letter-spacing: 0.3rem;
    //             font-family: 'Comfortaa', cursive !important;      
    //             // line-height: 1rem;
    //             // opacity: 0.5;
    //         }

    //         &--sub {
    //             display: block;
    //             font-size: 1.6rem;
    //             font-weight: 400;
    //             letter-spacing: 0.7rem;
    //             word-spacing: 1rem;
    //             @include respond(tab-port) {
    //                 // font-size: 1.4rem;
    //                 // word-spacing: 0.5rem;
    //                 letter-spacing: 0.4rem;
    //             }  
    //         }
    //     }
    // }
</style>