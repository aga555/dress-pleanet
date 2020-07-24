import Vue from 'vue';
import Vuex from 'vuex'
import stock from './modules/stock'
import orders from './modules/orders'
import users from './modules/users'
import {vuexfireMutations} from "vuexfire";

Vue.use(Vuex);

export const store = new Vuex.Store( {

        mutations : vuexfireMutations,
           modules: {
            stock, orders, users


        },

    },
)
