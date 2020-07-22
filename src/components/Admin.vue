<template>
    <div class="admin-wrapper">
        <div class="current-user">
            <new-dress></new-dress>
        </div>

        <div class="stock-wrapper">
            <h4> stock </h4>

            <md-table>
                <md-table-row>

                    <md-table-head>id</md-table-head>
                    <md-table-head>Name</md-table-head>


                    <md-table-head>Remove</md-table-head>
                </md-table-row>

                <md-table-row>
                    <md-table-cell md-numeric>1</md-table-cell>
                    <md-table-cell>Red dress</md-table-cell>

                    <md-table-cell>
                        <md-button class="md-icon-button md-dense md-raised md-primary">
                            <md-icon>cached</md-icon>
                        </md-button>
                    </md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-cell md-numeric>2</md-table-cell>
                    <md-table-cell>Black dress</md-table-cell>

                    <md-table-cell>
                        <md-button class="md-icon-button md-dense md-raised md-primary">
                            <md-icon>cached</md-icon>
                        </md-button>
                    </md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-cell md-numeric>3</md-table-cell>
                    <md-table-cell>Pink dress</md-table-cell>

                    <md-table-cell>
                        <md-button class="md-icon-button md-dense md-raised md-primary">
                            <md-icon>cached</md-icon>
                        </md-button>
                    </md-table-cell>

                </md-table-row>
            </md-table>
        </div>
        <div class="order-wrapper">

            <h4>Current orders</h4>
            <md-table>
                <md-table-row>
                    <md-table-head>order id</md-table-head>
                    <md-table-head>item name</md-table-head>
                    <md-table-head>Price</md-table-head>
                    <md-table-head>Quantity</md-table-head>
                    <md-table-head>size</md-table-head>
                    <md-table-head>Completed</md-table-head>

                </md-table-row>

                <md-table-row>
                    <md-table-cell md-numeric>1</md-table-cell>
                    <md-table-cell>Red dress</md-table-cell>
                    <md-table-cell> 200</md-table-cell>
                    <md-table-cell>1</md-table-cell>
                    <md-table-cell>38</md-table-cell>
                    <md-table-cell>
                        <md-button class="md-icon-button md-dense md-raised md-primary">
                            <md-icon>done</md-icon>
                        </md-button>
                    </md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-cell md-numeric>2</md-table-cell>
                    <md-table-cell>Black dress</md-table-cell>
                    <md-table-cell> 200</md-table-cell>
                    <md-table-cell>2</md-table-cell>
                    <md-table-cell>40</md-table-cell>
                    <md-table-cell>
                        <md-button class="md-icon-button md-dense md-raised md-primary">
                            <md-icon>done</md-icon>
                        </md-button>
                    </md-table-cell>
                </md-table-row>
            </md-table>
        </div>

<login></login>
    </div>
</template>

<script>
    import NewDress from "@/components/NewDress";
    import Login from "@/components/Login";

    export default {
        name: "Admin",
        components: {
            newDress: NewDress,
            login: Login
        }

    }
</script>

<style scoped>

</style>
