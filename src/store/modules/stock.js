import {firestoreAction} from "vuexfire";
import {dbStockRef} from "../../Firebase"

const state = {
    stockItems: []
    ,
};
const getters = {
    getStockItems: state => state.stockItems
};
const mutations = {};
const actions = {
    setStockRef: firestoreAction(context => {
        return context.bindFirestoreRef('stockItems', dbStockRef)
    })
}
export default {
    state, mutations, getters, actions
}
