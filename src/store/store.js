import Vue from 'vue';
import Vuex from 'vuex'
import {firebaseAuth} from "../Firebase";

Vue.use(Vuex)

export const store = new Vuex.Store(
    {
        state: {
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

            orders: [],
            currentUser: '',
        },
        getters: {
            getStockItems: state => state.stockItems,
            numberOfOrders: state => state.orders.length,
            currentUser: state => state.currentUser
        },

        mutations: {
            addOrder: (state, orders) => state.orders.push(orders),
            userStatus: (state, user) => {
                /*if (user) {
                    state.currentUser = user
                } else {
                    state.currentUser = null
                }*/
                user === null
                    ? state.currentUser = null
                    : state.currentUser = user.email

            }
        },
        actions:
            {
                signIn: async ({commit}, user) => {
                    try {
                        const userData = await firebaseAuth.signInWithEmailAndPassword(user.email, user.password);
                        commit('userStatus', userData.user);
                        alert('log ok')
                    } catch (error) {
                        const errorCode = error.code;
                        const errorMess = error.message;
                        if (errorCode === 'auth/wrong-password') {
                            alert('wrong password')
                        } else {
                            alert(errorMess)
                            console.log(this.form.email, this.form.password)
                        }
                    }
                },
              signOut: async({commit}) => {
                    try {
                        await firebaseAuth.signOut()
                             alert('sign out ok ')
                    } catch (error) {
                             alert('error signing out , ${error}')
                    }
                    commit('userStatus',null)
                }
            }
    },
)
