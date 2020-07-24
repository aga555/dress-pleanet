import Vue from 'vue';
import Vuex from 'vuex'
import stock from './modules/stock'
import orders from './modules/orders'
import users from './modules/users'


Vue.use(Vuex);

export const store = new Vuex.Store(
    {
        modules: {
            stock, orders, users


        },

    },
)
