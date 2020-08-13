<template>
    <div v-if="currentUser !==''">
        <div class=" row current-user">
        <h4  class="stock-admin ">  Logged in as {{currentUser}} </h4>
        <md-button @click="signOut"  class=" md-raised  md-accent" >signOut</md-button>
        </div>

        <md-list>
            <md-list-item to='/storage'>stock</md-list-item>
            <md-list-item to='/newDress'> new dress</md-list-item>
            <md-list-item to='/orders'>orders</md-list-item>
        </md-list>

<router-view></router-view>


    </div>
</template>


<script>


    import {store} from "../store/store";
    import {mapGetters} from "vuex"


    export default {
        name: "AdminContnent",
        currentUser: '',


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
    .stock-wrapper{
        margin-bottom: 40px;
    }
    .stock-admin{
        margin: 5px;
        font-size: 18px;
    }
    .current-user{
        display: flex;
        justify-content: center;
        align-items: baseline;
        margin: 10px;
    }
</style>
