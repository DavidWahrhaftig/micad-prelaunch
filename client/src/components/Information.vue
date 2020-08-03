<template>
    <div>
        <div class="paragraph">
            Preparing you for a smooth transition into our new system!
        </div>
        <a href="http://www.updates.micadipr.net/ReleaseNotes/IPR/iprGAReleaseNotes_3_6_0.pdf"
            class="link">
        
            <span class="link__ipr">ipr 3.6</span> release notes
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .link {
        &:link, &:visited {
            display: inline-block;
            font-size: 2rem;
            font-weight: 300;
            // font-family: 'Comfortaa', cursive;
            padding: 1rem 2rem;
            color: $color-white;
            text-decoration: none;
            border-radius: 0.2rem;
            // text-transform: uppercase;

            background-image: linear-gradient(120deg, $color-primary  0%, $color-primary 50%, $color-secondary 50%);
            background-size: 250%;
            transition: all 0.7s;

            
            // span {
            //     display: inline-block;
            //     margin-right: 1.5rem;
            // }
        }
        
        &__ipr {
            font-family: 'Comfortaa', cursive;
        }

        &:hover, &:active {
            background-position: 100%;
            color: $color-primary;
            transform: translateX(-1rem); // margin-left: 3rem;
            
        }
    }
</style>