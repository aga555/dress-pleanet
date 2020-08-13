<template>
    <div v-if="currentUser !==''">
        <div class=" row current-user">
            <h4 style="margin-bottom: 5px">  Logged in as {{currentUser}} </h4>
            <md-button @click="signOut">signOut</md-button>

        </div>


        <div class="stock-wrapper">


            <h4> stock ( {{getStockItems.length}} ) </h4>

            <md-table>


                    <md-table-head>id</md-table-head>
                    <md-table-head>Name</md-table-head>
                    <md-table-head>Price</md-table-head>
                    <md-table-head>Remove</md-table-head>



                <md-table-row  id="md-table-row" v-for="item in getStockItems" :key="item.id">

                    <md-table-cell> {{item.id}}</md-table-cell>
                    <md-table-cell>{{item.name}}</md-table-cell>
                    <md-table-cell>{{item.price|currency}}</md-table-cell>
                    <md-table-cell>
                        <md-button @click="removeStockItem(item.id)"
                                   class="md-icon-button md-dense md-raised md-primary">
                            <md-icon>cached</md-icon>
                        </md-button>
                    </md-table-cell>
                </md-table-row>

            </md-table>
        </div>


        <div class="order-wrapper">
            {{getOrders}}
            <h4>Current orders ({{numberOfOrders}} ) </h4>
            <md-table>
                <md-table-row>
                    <md-table-head>order id</md-table-head>
                    <md-table-head>item number</md-table-head>
                    <md-table-head>item name</md-table-head>
                    <md-table-head>Price</md-table-head>
                    <md-table-head>Quantity</md-table-head>
                    <md-table-head>size</md-table-head>
                    <md-table-head>Completed</md-table-head>
                </md-table-row>
                <!--  <md-table-row md-flex="50" v-for="(order,index) in getOrders" :key="order.id">
                      <md-table-cell >{{index +1}}
                        </md-table-cell>-->

                <md-table-container  v-for="item in getOrders" :key="item.id">




                    <md-table-row v-for="(single, index) in item.items" :key="single.id">
                        <md-table-cell md-numeric>

                            {{index }}
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




                </md-table-container>

            </md-table>

        </div>

        <new-dress></new-dress>
    </div>
</template>


<script>


    import NewDress from "@/components/NewDress";
    import {store} from "../store/store";
    import {mapGetters} from "vuex"


    export default {
        name: "AdminContnent",
        currentUser: '',

        components: {
            newDress: NewDress,

        },
        computed: {
            ...mapGetters([
                'getStockItems',
                'numberOfOrders',
                'currentUser',
                'getOrders'
            ])

        },

        methods: {
            async signOut() {
                store.dispatch('signOut')
            },
            removeStockItem(id) {
                store.dispatch('removeStockItem', id)
            },
            removeOrder(id) {
                store.dispatch('removeOrder', id)
            },

        },
        beforeRouteLeave: (to, from, next) => {
            if (confirm("You will be logged out  when leaving admin") == true) {
                store.dispatch('signOut')
                next()

            } else {
                next(false)
            }
        }

    }

</script>

<style scoped>

    #md-table-row {
        transition: .3s cubic-bezier(.4, 0, .2, 1);

        will-change: background-color, font-weight;
        display: table-row;

        text-align: left;
    }
</style>
