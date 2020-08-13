<template>
    <div class="stock-wrapper">


        <h4 class="stock-admin"> stock ( {{getStockItems.length}} ) </h4>

        <md-table>


            <md-table-head>id</md-table-head>
            <md-table-head>Name</md-table-head>
            <md-table-head>Price</md-table-head>
            <md-table-head>Category</md-table-head>
            <md-table-head>Remove</md-table-head>




            <md-table-row v-for="item in getStockItems" :key="item.id">
                <md-table-cell> {{item.id}}</md-table-cell>
                <md-table-cell>{{item.name}}</md-table-cell>
                <md-table-cell>{{item.price|currency}}</md-table-cell>
                <md-table-cell>{{item.category}}</md-table-cell>
                <md-table-cell>
                    <md-button @click="removeStockItem(item.id)"
                               class="md-icon-button md-dense md-raised md-primary">
                        <md-icon>cached</md-icon>
                    </md-button>
                </md-table-cell>
            </md-table-row>


        </md-table>
    </div>

</template>

<script>
    import {store} from "../store/store";
    import {mapGetters} from "vuex"
    export default {
        name: "Storage",
        computed: {
            ...mapGetters([
                'getStockItems',
            ])

        },
        methods: {
            removeStockItem(id) {
                store.dispatch('removeStockItem', id)
            },

        },
    }
</script>

<style scoped>
    .md-table-head-container, .md-table-head-label {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center !important;
    }
</style>
