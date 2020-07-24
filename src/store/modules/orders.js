import {firestoreAction} from "vuexfire";
import {dbOrdersRef} from "../../Firebase";

const state = {
    orders: [],
};
const getters ={
   numberOfOrders: state => state.orders.length,
   getOrders: state => state.orders
};
const mutations= {
// addOrder: (state, orders) => state.orders.push(orders)
};
const actions = {
    setOrdersRef: firestoreAction(context => {
        return context.bindFirestoreRef('orders', dbOrdersRef)
    }),
    addNewOrder:async (context, order) =>{

        try {
           await dbOrdersRef.add(order);
        }
        catch (error) {
            alert('Sorry, error , try again later')
        }
    }
}

export default {
    state, mutations, getters, actions
}
