<template>
    <div>

        <md-button @click="goToStock"> back to stock </md-button>


        <md-card>
            <h2 style="margin: 30px; padding-top:50px ">{{item[0].name}}</h2>

                    <img :src=" item[0].url" alt="Skyscraper" height="50px">


                <md-card-area>
                    <md-card-header>
                        <span class="md-title">
                        </span>
                        <span class="md-subhead">
                            {{item[0].description}}
                         </span>
                    </md-card-header>

                    <md-card-actions>
                        <md-button @click="goToStock"> back to stock </md-button>

                    </md-card-actions>
                </md-card-area>

        </md-card>
    </div>

</template>

<script>
    export default{
    props: ['id'],
        name: "DressDetail",
        methods: {
            goToStock() {
                this.$router.push({name: 'stockLink'})
            }
        },
        computed: {
            getStockItems() {
                return this.$store.getters.getStockItems
            },
            item() {
                return this.$store.getters.getStockItems.filter((item) =>
                    item.id === this.id)
            }
        },
    }
</script>

<style scoped>

</style>
