<template>
    <div class="menu-wrapper">
        <!--menu-->
        <div class="menu">

            <md-card>
                <md-card-media>
                    <img src="../assets/dress-black.jpg" alt="black-dress" style="width:200px">
                </md-card-media>

                <md-card-header>
                    <div class="md-title"> Black dress</div>
                    <div class="md-subhead">size : s </div>
                </md-card-header>

                <md-card-actions>
                    <md-button>Add to basket </md-button>

                </md-card-actions>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                </md-card-content>
            </md-card>
            <md-card>
                <md-card-media>
                    <img src="../assets/dress-green.jpg" alt="dress" style="width:200px">
                </md-card-media>

                <md-card-header>
                    <div class="md-title"> Green dress </div>
                    <div class="md-subhead">size : s </div>
                </md-card-header>

                <md-card-actions>
                    <md-button>Add to basket </md-button>

                </md-card-actions>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                </md-card-content>
            </md-card>


        </div>
        <div class="basket-wrapper">
            <h4> Basket </h4>
            <p>
                Thank you for order
            </p>
        </div>
    </div>
</template>

<script>
    import 'vue-material/dist/vue-material.min.css'
    import 'vue-material/dist/theme/default.css'


    export default {
        name: "Menu"
    }
</script>

<style scoped>
    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }
    .menu-wrapper{
        display: flex;
        flex-direction: column;
    }
    @media  screen and (min-width: 900px) {
        .menu-wrapper{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
     .menu{
         width: 60vw;
     }
    }
</style>
