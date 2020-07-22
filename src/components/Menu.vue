<template>
    <div class="menu-wrapper">
        <!--menu-->
        <div class="menu">
            <md-layout md-flex="50" v-for="(item) in getMenuItems" :key="item.id">

                <md-card>
                    <md-card-media>

                    </md-card-media>

                    <md-card-header>
                        <div class="md-title"> {{item.name }}</div>
                        <div class="md-subhead">{{item.price}}</div>
                        <div class="md-subhead" v-for="(option,index) in item.options" :key="option[index]"> size: {{option.size}}</div>
                    </md-card-header>

                    <md-card-actions>
                        <md-button>Add to basket</md-button>

                    </md-card-actions>

                    <md-card-content>
                     {{item.description}}
                    </md-card-content>
                </md-card>
            </md-layout>
              <!--  <md-card>
                    <md-card-media>
                        <img src="{{item.img}}" alt="dress" style="width:200px">
                    </md-card-media>

                    <md-card-header>
                        <div class="md-title"> Green dress</div>


                    </md-card-header>

                    <md-card-actions>
                        <md-button>Add to basket</md-button>

                    </md-card-actions>

                    <md-card-content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio.
                        Dolores,
                        sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus
                        sint.
                        Excepturi.
                    </md-card-content>
                </md-card>-->


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
        name: "Menu",
        data: function () {
            return {
                getMenuItems: {

                    1: {
                        id: 1,
                        name: " Black dress",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.",
                        options: [
                            {size: 36},
                            {size: 38},
                            {size: 40}
                        ],
                        price: 200,
                        //url: '../assets/dress-green.jpg'
                      //  url: "https://pixabay.com/pl/photos/kobieta-m%C5%82ody-r%C3%B3%C5%BCowy-%C5%82adny-pi%C4%99kny-3075704/"
                    },
                    2: {
                        id: 2,
                        name: " Green dress",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.",
                        options: [
                            {size: 36},
                            {size: 38},
                            {size: 40}
                        ],
                        price: 200,
                        img: "../assets/dress-green.jpg"
                    },
                    3: {
                        id: 3,
                        name: " Pink dress",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.",
                        options: [
                            {size: 36},
                            {size: 38},
                            {size: 40}
                        ],
                        price: 200,
                        img: "../assets/pink-dress.jpg"
                    },
                    4: {
                        id: 4,
                        name: " Red dress",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.",
                        options: [
                            {size: 36},
                            {size: 38},
                            {size: 40},
                            {size: 42}
                        ],
                        price: 200,
                        img: "../assets/red-dress.jpg"
                    },
                }


            }
        }

    }
</script>

<style scoped>
    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

    .menu-wrapper {
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-width: 900px) {
        .menu-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .menu {
            width: 60vw;
        }
    }
</style>
