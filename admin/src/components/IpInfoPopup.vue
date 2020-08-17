<template>
    <div class="popup" v-if="ipInfo" :class="[{'popup--hide': hidePopup}]" id="popup">
            <div class="popup__content">
                <!-- <div class="popup__left">
                    <img src="img/nat-8.jpg" alt="Tour photo" class="popup__img">
                    <img src="img/nat-9.jpg" alt="Tour photo" class="popup__img">
                </div>
                <div class="popup__right">
                    <a href="#section-tours" class="popup__close">&times;</a>
                    <h2 class="heading-secondary u-margin-bottom-small">Start Booking Now</h2>
                    <h3 class="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p class="popup__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur qui cupiditate perferendis veniam? Adipisci, labore dolores. Alias eveniet quia consequatur laborum maxime quasi error suscipit perspiciatis, sed repellat eius, unde voluptatum. Itaque reprehenderit ab culpa, ex repellat laboriosam repudiandae nostrum. Esse blanditiis distinctio, ipsum aperiam accusantium et ex delectus consequuntur debitis nesciunt totam doloremque perferendis quae corporis saepe soluta nihil molestias est impedit! Suscipit harum dolores molestiae minima facere, aut ipsum, veritatis dicta a obcaecati explicabo nemo! Est earum doloribus temporibus? Expedita autem qui vel dolor quo, labore nostrum nisi numquam corporis fuga nemo earum est dignissimos sit consequatur consectetur praesentium. Pariatur officia fuga voluptatem minus eum natus adipisci sequi repellat, alias laboriosam nostrum ut quod excepturi quis facere, porro dolor, harum nihil vero doloremque velit deleniti! Iusto laborum, consequatur esse praesentium nam error ab laboriosam, quibusdam obcaecati voluptatum porro doloremque ullam nihil repudiandae repellat, tempore officiis. Accusantium, omnis a.
                    </p>
                    <a href="#" class="btn btn--green">Book now</a>
                </div> -->

                <div class="heading-primary--main">IP Information</div>

                <div class="popup__table"  v-for="item in formattedInfo" :key="item.title">
                    <div class="popup__table-left">{{item.title}}</div>
                    <div class="popup__table-right">{{item.content}}</div>
                </div>
                <!-- <div class="heading-primary--sub">User Email: {{ ipInfo.email }}</div> -->

                <button class="button u-margin-top-small" @click="$emit('hide-popup')">Go back</button>
            </div>
        </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    props: ['ipInfo', 'hidePopup'],
    computed: {
        formattedInfo() {

            const device = this.ipInfo.platform.product || 'unknown';
            
            return [ 
                { title: 'IP', content: this.ipInfo.ip},
                { title: 'User', content: this.ipInfo.email},
                { title: 'Device', content: device},
                { title: 'OS', content: `${this.ipInfo.platform.os.family} ${this.ipInfo.platform.os.version}`},
                { title: 'Browser', content: `${this.ipInfo.platform.name} ${this.ipInfo.platform.version}`},
                { title: 'Auth Verified', content: this.ipInfo.authUrlVerified}
                
            ]
        }
    },
    methods: {
        // hidePopup() {
        //     this.$emit('hidePopup');   
        // }
    }


});
</script>

<style lang="scss">
.popup {

    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba($color-black, 0.8);
    z-index: 9999;
    opacity: 1;
    visibility: visible;
    transition: all 0.5s;

    &__content {
        @include absCenter;
        width: 95%;
        background-color: $color-white;
        box-shadow: 0 2rem 4rem rgba($color-black, 0.2);
        border-radius: 0.3rem;
        display: table;
        overflow: visible; // since imgs overflow the rounded corners

        opacity: 1;
        padding: 1.5rem 1.5rem;
        transform: translate(-50%, -50%) scale(1);
        transition: all 0.5s 0.2s; // 0.5 is the duration of the transition and 0.2s is the delay 

        @include respond(tab-port) {
            width: 70rem;
            padding: 2rem 5rem;
        }
    }

    &__table {
        display: grid;
        // padding: 0 5rem;
        width: 100%;
        margin: 0 auto;
        
        grid-template-columns: 30% 70%;
        font-size: 2rem;

        &:nth-child(odd) {
            background-color: $color-primary-lighter;
        }
        &:nth-child(even) {
            background-color: $color-primary-light;
        }
        &:nth-child(:last-child){
            margin-bottom: 5rem;
        }

        @include respond(tab-port) {
            & > * {
                padding: 0 2rem;
            }
        }

        &-left {
            display: inline-block;
            justify-self: start;
        }
        &-right {
            display: inline-block;
            justify-self: right;
            // text-align: right;
        }
    }

    

    

    // POPUP OPEN STATE 

    &:target { // when a link to this element with id #popup is clicked or url has #popup in it
        opacity: 1;
        visibility: visible;
    }
    &--hide { // when a link to this element with id #popup is clicked or url has #popup in it
        opacity: 0;
        visibility: hidden;
    }

    &:target &__content {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    &--hide &__content{ // when a link to this element with id #popup is clicked or url has #popup in it
        opacity: 0;
        visibility: hidden;
        transform: translate(-50%,  -50%) scale(0.25);
    }

    // &__close {
    //     &:link,
    //     &:visited {
    //         color: $color-grey-dark;
    //         position: absolute; // position of popup__right (parent) is inherited from popup__content with positoin absolute
    //         top: 2.5rem;
    //         right: 2.5rem;
    //         font-size: 3rem;
    //         text-decoration: none;
    //         text-transform: uppercase;
    //         display: inline-block;
    //         line-height: 1;
    //         transition: all 0.2s;
    //     }

    //     &:hover {
    //         color: $color-primary;
    //     }
    // }


}


</style>