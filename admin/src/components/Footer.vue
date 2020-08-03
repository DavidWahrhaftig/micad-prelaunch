<template>
    <footer class="footer">
            <div class="footer__logo-box">
                <!-- Responsive Images: picture is for Art Direction -->
                <!-- <picture class="footer__logo"> -->
                    <!-- responsie image -->
                    <!-- <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x" 
                            media="(max-width:37.5em)">
                        
                    <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png"> -->
                <!-- </picture> -->

                <!-- Responsive images: srcset is for density switching  -->
                <img 
                    srcset="../assets/shivers.svg" 
                    alt="Full logo"
                    href="https://www.micad.co.uk/"
                    class="footer__logo">
            </div>
            <a class="footer__link" href="https://www.micad.co.uk/">micad.co.uk</a>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss"> 
    .footer {
        background-color: $color-grey-dark-3;
        // color: $color-grey-light-1;
        padding: 0;
        font-size: 1.4rem;
        position: fixed;
        height: $footer-height;
        bottom: 0;
        width: 100%;

        &__logo-box {
        text-align: center;
        // margin-bottom: 8rem;
        // @include respond(tab-port) {
        //     margin-bottom: 4rem;
        // }
        }

        &__logo {
            width: 8rem;
        }

        &__link {
            &:link, &:visited {
                // background-color: $color-grey-dark-3;
                color: $color-grey-dark-2;
                text-decoration: none;
                font-size: 1.8rem;
                // text-transform: uppercase;
                display: inline-block;
                transition: all 0.2s;
            }

            &:hover, &:active {
                color: $color-primary;
                box-shadow: 0 1rem 2rem rgba($color-black, 0.4);
                transform: rotate(5deg) scale(1.3);
            }
    }
    }

     
</style>