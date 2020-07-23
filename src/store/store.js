import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store(
    {
        state: {
            stockItems: {

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
            },

        orders:[]
        },
        getters:{
            getStockItems:state => state.stockItems,
            numberOfOrders:state => state.orders.length
        }
    }
)
