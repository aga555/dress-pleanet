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
    }),
    addStockItem: async(context, dress)=>
    {
        try{
            await dbStockRef.add(dress)
        }
        catch (eroor) {
                        alert('Error creatin new dress, ${error}')
        }
    }

}
export default {
    state, mutations, getters, actions
}
