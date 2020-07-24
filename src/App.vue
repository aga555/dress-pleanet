<template>
    <div id="app">

 <app-header></app-header>


        <router-view></router-view>
    <md-button class="md-icon-button">

    </md-button>
    </div>
</template>

<script>
     import 'vue-material/dist/vue-material.min.css'
     import 'vue-material/dist/theme/default.css'

    import Header from "@/components/Header";
     import {dbStockRef} from "./Firebase";
     import {dbOrdersRef} from "./Firebase";

    export default {
        name: 'App',
        components: {

           appHeader: Header

        },
        created ( ){
            this.$store.dispatch('setStockRef',dbStockRef)
            this.$store.dispatch('setOrdersRef',dbOrdersRef)
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }
</style>
