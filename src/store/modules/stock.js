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
    },
    removeStockItem: async (context, id)=>{
        try{
            const item = await dbStockRef.doc(id);
            item.delete();
            alert('delete item')
        }
        catch (error) {
            alert( 'ups! smoething went wrong, ${error}')
        }
    }

}
export default {
    state, mutations, getters, actions
}
