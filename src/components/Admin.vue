<template>
    <div class="admin-wrapper">
        <div class="current-user">
            <span> Logged in as {{currentUser}}  </span>
            <md-button @click="signOut">signOut</md-button>
            <new-dress></new-dress>
        </div>

        <div class="stock-wrapper">
            <h4> stock </h4>


            <md-table>
                <md-table-row>

                    <md-table-head>id</md-table-head>
                    <md-table-head>Name</md-table-head>
                    <md-table-head>Price</md-table-head>
                    <md-table-head>Remove</md-table-head>

                </md-table-row>

                <md-table-row md-flex="50" v-for="item in getStockItems" :key="item.id">

                    <md-table-cell> {{item.id}}</md-table-cell>
                    <md-table-cell>{{item.name}}</md-table-cell>
                    <md-table-cell>{{item.price}}</md-table-cell>
                    <md-table-cell>
                        <md-button @click="removeStockItem(item.id)" class="md-icon-button md-dense md-raised md-primary">
                            <md-icon>cached</md-icon>
                        </md-button>
                    </md-table-cell>
                </md-table-row>

</md-table>
        </div>


        <div class="order-wrapper">

            <h4>Current orders ({{numberOfOrders}})</h4>
            <md-table>
                <md-table-row>
                <md-table-head>order id</md-table-head>
                <md-table-head>item name</md-table-head>
                <md-table-head>Price</md-table-head>
                <md-table-head>Quantity</md-table-head>
                <md-table-head>size</md-table-head>
                <md-table-head>Completed</md-table-head>
                </md-table-row>
                <md-table-row md-flex="50" v-for="(order,index) in getOrders" :key="order.id">
                    <md-table-cell >{{index +1}}
                      </md-table-cell>

                    <md-table-row  v-for="(item) in order.items" :key="item.id">


                        <md-table-cell >  {{item.name }}
                            </md-table-cell>

                        <md-table-cell >  {{item.price}}
                        </md-table-cell>
                        <md-table-cell >  {{item.quantity}}
                        </md-table-cell>
                        <md-table-cell >  {{item.size}}
                        </md-table-cell>
                        <md-table-cell>
                            <md-button @click="removeOrder(order.id)" class="md-icon-button md-dense md-raised md-primary">
                                <md-icon>cached</md-icon>
                            </md-button>
                        </md-table-cell>


                    </md-table-row>

                </md-table-row>

            </md-table>
        </div>

        <login></login>
    </div>
</template>

<script>
    import NewDress from "@/components/NewDress";
    import Login from "@/components/Login";
    import {store} from "../store/store";
    import {mapGetters} from "vuex"

    export default {
        name: "Admin",


        components: {
            newDress: NewDress,
            login: Login
        },
        computed: {
            ...mapGetters([
                'getStockItems',
                ' numberOfOrders',
                'currentUser',
                'getOrders'
            ])

        },

        methods: {
            async signOut() {
                store.dispatch('signOut')
            },
            removeStockItem(id){
                store.dispatch('removeStockItem',id)
            },
            removeOrder(id){
                store.dispatch('removeOrder',id)
            }
        }
    }

</script>

<style scoped>

</style>
