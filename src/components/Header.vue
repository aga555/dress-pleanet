<template>
    <header>
        <div  class="row col-sm-12">
            <img src="../assets/super-dress-logo.png" class="header-logo" alt="logo">
            <h1> super dress </h1>
        </div>

    <nav>
        <ul>
            <li>
                <router-link to='/home'>
                <a> home </a>
                </router-link>
            </li>


            <li>
                <router-link to='/contact'>
                <a > contact </a>
                </router-link>
            </li>

            <li>
                <router-link to ='/menu'>
                    <a > menu </a>
                </router-link>

            </li>

            <li>
                <router-link to='/about'>
                    <a > about </a>
                </router-link>
            </li>
-->
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
    font-size:20px;
    color: black;
}
    .header-logo{
        width: 100px;
    }
    ul{
        padding: 10px 0;
    }
    li{
        display: inline-block;
    }

    @media screen and (min-width: 900px){
.header-logo{
    max-width: 100px;
}
    }

</style>
