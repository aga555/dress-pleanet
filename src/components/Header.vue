<template>
    <header>
        <div class="row col-sm-12">
            <img src="../assets/super-dress-logo.png" class="header-logo" alt="logo">
            <h1> super dress </h1>
        </div>

        <nav>
            <ul>

                <router-link to='/home' tag="li">
                    <a> home </a>
                </router-link>


                <router-link to='/contact' tag="li">
                    <a> contact </a>
                </router-link>


                <router-link :to="{name: 'stockLink'}" tag="li">
                    <a> menu </a>
                </router-link>

                <router-link to='/about' tag="li">
                    <a> about </a>
                </router-link>


            </ul>
        </nav>
    </header>
</template>

<script>

    export default {
        name: "Header"
    }
</script>

<style scoped>
    h1 {
        font-size: 20px;
        color: black;
    }

    .header-logo {
        width: 100px;
    }

    ul {
        padding: 10px 0;
    }

    li {
        display: inline-block;
    }

    @media screen and (min-width: 900px) {
        .header-logo {
            max-width: 100px;
        }
    }

</style>
