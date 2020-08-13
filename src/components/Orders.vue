<template>
    <div class="order-wrapper">
        <h4 class="stock-admin">Current orders ({{numberOfOrders}} ) </h4>
        <md-table>

            <md-table-head>order id</md-table-head>
            <md-table-head>item number</md-table-head>
            <md-table-head>item name</md-table-head>
            <md-table-head>Price</md-table-head>
            <md-table-head>Quantity</md-table-head>
            <md-table-head>size</md-table-head>
            <md-table-head>Completed</md-table-head>






            <md-table-row  v-for="(item ,index) in getOrders" :key="item.id" >
                <md-table-cell md-numeric>

                    {{index +1}}
                </md-table-cell>



                <md-table-row v-for="single in item.items" :key="single.id" >
                    <md-table-cell >

                        {{single.id}}
                    </md-table-cell>
                    <md-table-cell >

                        {{single.name}}
                    </md-table-cell>
                    <md-table-cell>

                        {{single.price|currency}}
                    </md-table-cell>
                    <md-table-cell>

                        {{single.quantity}}
                    </md-table-cell>

                    <md-table-cell>

                        {{single.size}}
                    </md-table-cell>

                    <md-table-cell>
                        <md-button @click="removeOrder(order.id)"
                                   class="md-icon-button md-dense md-raised md-primary">
                            <md-icon>cached</md-icon>
                        </md-button>
                    </md-table-cell>
                </md-table-row>

            </md-table-row>








        </md-table>

    </div>
</template>

<script>
    import {store} from "../store/store";
    import {mapGetters} from "vuex"
    export default {
        name: "Orders",

        computed: {
            ...mapGetters([

                'numberOfOrders',

                'getOrders'
            ])

        },

        methods: {

            removeOrder(id) {
                store.dispatch('removeOrder', id)
            },

        }
    }

</script>

<style scoped>

</style>
