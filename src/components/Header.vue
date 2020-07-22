<template>
    <header>
        <div  class="row col-sm-12">
            <img src="../assets/super-dress-logo.png" class="header-logo" alt="logo">
            <h1 href="/"> super dress </h1>
        </div>

    <nav>
        <ul>
            <li>
                <a href="/home"> home </a>
            </li>
            <span> ~</span>
            <li>
                <a href="/contact"> contact </a>
            </li>
            <span> ~</span>
            <li>
                <a href="/menu"> menu</a>
            </li>
            <span> ~</span>
            <li>
                <a href="/about"> about us </a>
            </li>

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
