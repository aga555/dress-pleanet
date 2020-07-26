<template>
    <header>
        <div class="row col-sm-12">
            <img src="../assets/super-dress-logo.png" class="header-logo" alt="logo">
            <h1> super dress </h1>
        </div>

        <md-tabs class="md-transparent" md-alignment="fixed">
            <md-tab id="tab-home" md-label="Home" to='/home'>


            </md-tab>
            <md-tab id="tab-contact" md-label="contact" to='/contact'>
            </md-tab>
            <md-tab id="tab-stock" md-label="stock" :to="{name: 'stockLink'}">

            </md-tab>
            <md-tab id="tab-about" md-label="about us " to='/about'>

                <md-list>
                    <md-list-item to='/history'>Our history</md-list-item>
                    <md-list-item to='/guide'>Ordering guide</md-list-item>
                    <md-list-item to='/delivery'>Delivery information</md-list-item>
                </md-list>
            </md-tab>
            <md-tab id="tab-login" md-label="login " to='/login'> </md-tab>

            <md-tab id="tab-admin" md-label="admin " to='/admin'>
                <md-list>
                <md-list-item id="stock" md-label="stock" > </md-list-item>
                <md-list-item id="orders" md-label="orders" > </md-list-item>
                <md-list-item id="newDress" md-label="newDress" > </md-list-item>
                </md-list>
            </md-tab>



        </md-tabs>


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
