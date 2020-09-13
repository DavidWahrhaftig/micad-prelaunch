<template>
    <div class="micad__logo">
        <img class="micad__logo-letters" alt="Micad Letters logo" src="../assets/micad_letter_logo.svg">
        <img class="micad__logo-graphic" alt="Micad Graphic logo" src="../assets/shivers.svg">
        <img class="micad__logo-construction" alt="Micad Graphic logo" src="../assets/construction_hat.svg">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .micad__logo {
        background-color: $color-white;
        // display: inline-block;
        width: 42.5rem;
        margin: 0 auto;
        transform: scale(.7);

        @include respond(tab-land) {
            transform: scale(.5);
            
            // margin: 0;
        }
        &-letters {
            height: 7.5rem;
            margin-right: 1.6rem;
        }

        &-graphic {
            height: 7.5rem;
            display: inline-block;
            // &::after {
            //     content: '';
            //     display: block;
            //     height: 1.3rem;
            //     width: 1.3rem;
                
            //     position: absolute;
            //     top: 50%;
            //     left: 50%;
            //     transform: translate(-50%, -50%);
            //     z-index: 100;     
            //     background-image: url('../assets/construction_hat.svg');
                
            // }
        }

        &-construction {
            height: 5rem;
            display: inline-block;
            z-index: 100;
            position: absolute;
            transform: translate(-6rem, -2rem) rotate(12deg);
        }
        &-construction-2 {
            height: 5rem;
            display: inline-block;
            z-index: 100;
            position: absolute;
            transform: scale(-1, 1) translate(12rem, -1.75rem) rotate(5deg);

            @include respond(desktop) {
                transform: scale(-1.5, 1.5) translate(12rem, -1.75rem) rotate(5deg);
            }
        }
    }
</style>