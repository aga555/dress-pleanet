<template>
    <div>
        <h2>the product id is :{{this.$route.params.id}}</h2>
        <md-button @click="goToStock"> back to stock </md-button>


    </div>

</template>

<script>
    export default {
        name: "DressDetail",
        methods: {
            goToStock() {
                this.$router.push({name: 'stockLink'})
            }
        },
        computed: {
            getStockItems() {
                return this.$store.getters.getStockItems
            }
        },
    }
</script>

<style scoped>

</style>
