<template>
    <div id="app">
        <app-header></app-header>
        <app-home></app-home>
        <app-menu></app-menu>

    <md-button class="md-icon-button">
        <md-icon>home</md-icon>
    </md-button>
    </div>
</template>

<script>


    import Home from "@/components/Home";
    import Menu from "@/components/Menu";
    import Header from "@/components/Header";

    export default {
        name: 'App',
        components: {
            appHeader: Header,
            appHome: Home,
            appMenu: Menu

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
