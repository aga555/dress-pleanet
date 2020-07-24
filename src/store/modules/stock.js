const state = {
    stockItems: {

        1: {
            name: " Black dress", price: 200,
            img: {
                url: "https://pixabay.com/pl/photos/kobieta-m%C5%82ody-r%C3%B3%C5%BCowy-%C5%82adny-pi%C4%99kny-3075704/"
            },

            id: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.",
            options: [
                {size: 36},
                {size: 38},
                {size: 40}
            ],

            //url: '../assets/dress-green.jpg'
            //  url: "https://pixabay.com/pl/photos/kobieta-m%C5%82ody-r%C3%B3%C5%BCowy-%C5%82adny-pi%C4%99kny-3075704/"
        },
        2: {
            name: " Green dress", price: 200, img: "../assets/dress-green.jpg",
            id: 2,

            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.",
            options: [
                {size: 36},
                {size: 38},
                {size: 40}
            ],


        },
        3: {
            name: " Pink dress", price: 200, img: "../assets/pink-dress.jpg",
            id: 3,

            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.",
            options: [
                {size: 36},
                {size: 38},
                {size: 40}
            ],


        },
        4: {
            name: " Red dress", price: 200, img: "../assets/red-dress.jpg",


            id: 4,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.",
            options: [
                {size: 36},
                {size: 38},
                {size: 40},
                {size: 42}
            ],


        },
    },
};
const getters = {
    getStockItems: state => state.stockItems
};
const mutations = {};
const actions = {};
export default {
    state, mutations, getters, actions
}
