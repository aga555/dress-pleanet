<template>
    <div id="app">
<app-header></app-header>
        <home></home>
    </div>
</template>

<script>


    import Home from "@/components/Home";
    import Header from "@/components/Header";

    export default {
        name: 'App',
        components: {
           appHeader: Header,
            home: Home,

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
