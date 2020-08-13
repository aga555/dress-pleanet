<template>

    <div>

        <div class="row col-md-12">
            <md-button class="md-primary" @click="show()">
                filters
            </md-button>
            <div v-show="showFilters">
            <md-field>
                <label> search perfect dress by name </label>
                <md-input type="text" v-model="search"/>
            </md-field>
            <md-field>
                <label> search perfect dress by price</label>
                <md-input type="text" v-model="searchPrice"/>
            </md-field>

            <md-field>
                <label>search perfect dress by size </label>
                <md-select name="size" id="size" v-model="selectedSize">
                    <md-option value=36>36</md-option>
                    <md-option value=38>38</md-option>
                    <md-option value=40>40</md-option>

                </md-select>

            </md-field>
            <md-button class="md-primary" @click="clearFilters">
                clear filters
            </md-button>
        </div>
    </div>
        <div class="menu-wrapper">
            <!--menu-->

            <div class="menu">
                <md-card md-flex="50" v-for="item in filtredDress" :key="item.id">

                    {{item}}

                    <img :src="item.url">


                    <md-card-header>
                        <div class="md-title" @click="goToDetail(item.id) "> {{item.name }}</div>

                        <div class="md-subhead">{{item.price|currency}}</div>

                        <div class="md-subhead" v-for="(size,index) in item.size" :key="size[index]"> size:
                            {{size}}
                            <md-button @click="addToBasket(item, size)">
                                <md-icon>add</md-icon>
                            </md-button>
                        </div>
                    </md-card-header>
                    <md-card-content>
                        <img :src="item.url"/>

                    </md-card-content>
                    <md-card-content>
                        {{item.category}}
                    </md-card-content>
                    <md-card-content>
                        {{item.description}}
                    </md-card-content>

                </md-card>


            </div>
            <!--shopping basket-->
            <div class="basket-wrapper">
                <h3> Basket </h3>
                <div v-if="basket.length>0">

                    <md-table>
                        <md-table-row>
                            <md-table-head> dress name</md-table-head>
                            <md-table-head> size</md-table-head>
                            <md-table-head>price</md-table-head>
                            <md-table-head>cost</md-table-head>
                            <md-table-head>quantity</md-table-head>
                            <md-table-head>remove</md-table-head>
                        </md-table-row>

                        <md-table-row v-for="(item,index) in basket" :key="basket[index]">
                            <md-table-cell>{{item.name}}</md-table-cell>
                            <md-table-cell>{{item.size}}</md-table-cell>

                            <md-table-cell>{{item.price|currency}}</md-table-cell>
                            <md-table-cell>{{item.price*item.quantity|currency}}</md-table-cell>
                            <md-table-cell>

                                <md-button class="md-icon-button md-list-action" @click="increaseQuantity(item)">
                                    <md-icon class="md-primary">add</md-icon>
                                </md-button>
                                <span>{{item.quantity}}</span>
                                <md-button class="md-icon-button md-list-action" style="align-self: center"
                                           @click="decreaseQuantity(item)">

                                    <md-icon class="md-primary">remove</md-icon>
                                </md-button>

                            </md-table-cell>
                            <md-table-cell>
                                <md-button class="md-icon-button md-dense md-raised md-primary"
                                           @click="removeFomBasket(item)">
                                    <md-icon>cached</md-icon>
                                </md-button>
                            </md-table-cell>
                        </md-table-row>
                    </md-table>
                    <h4> Total cost : {{total|currency}} </h4>
                    <md-button class="md-primary" @click="addNewOrder">order</md-button>
                </div>
                <div v-else>
                    <p> {{basketText}}</p>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"
    import {store} from "../store/store";


    export default {
        name: "Stock",
        data: function () {
            return {
                basketText: "Your Basket is empty",
                basket: [],
                search: '',
                searchPrice: '',
                selectedCategory: '',
                selectedSize: '',
                showFilters:false,

            }
        }
        ,
        components: {},

        computed: {
            ...mapGetters([
                'getStockItems'
            ]),
            total() {
                let totalCost = 0;

                this.basket.map(item => {
                        totalCost += item.quantity * item.price
                    }
                );
                return totalCost;
            },
            filtredDress: function () {
                return this.getStockItems.filter((dress) => {
                    return dress.price.match(this.searchPrice) && dress.name.match(this.search)
                })
            }
        },
        methods: {
            goToDetail(id) {
                this.$router.push({name: 'details', params: {id: id}})
            },
            async addToBasket(item, size) {
                const dressExist = await this.basket.find(
                    dress => dress.name === item.name && dress.size === size
                );
                if (dressExist) {
                    dressExist.quantity++;
                    return
                }
                this.basket.push({
                    name: item.name,
                    price: item.price,
                    size: size,
                    quantity: 1,
                })
            },
            decreaseQuantity(item) {
                item.quantity--;
                if (item.quantity === 0) {
                    this.removeFomBasket(item)
                }
            },

            increaseQuantity(item) {
                item.quantity++;
                if (item.quantity === 0) {
                    this.removeFomBasket(item)
                }
            },
            removeFomBasket(item) {
                this.basket.splice(this.basket.indexOf(item), 1)
            },
            addNewOrder() {

                const order = {
                    items: {...this.basket},
                    createdAt: new Date()
                }
                store.dispatch('addNewOrder', order)
                //   this.$store.commit('addOrder',this.basket);
                this.basket = [];
                this.basketText = "Thank You, your order has been placed."
            },
            clearFilters() {
                this.search = '';
                this.searchPrice = '';
                this.selectedCategory = '';
                this.selectedSize = []

            },
            show(){
                this.showFilters =! this.showFilters
            }
        },


    }
</script>

<style scoped>
    .md-title {
        cursor: pointer;
    }

    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

    .menu-wrapper {
        display: flex;
        flex-direction: column;
    }

    .basket-wrapper {
        flex-direction: row;

    }

    @media screen and (min-width: 900px) {
        .menu-wrapper {
            display: flex;
            flex-direction: row;

        }

        .menu {
            width: 60vw;
        }

        .basket-wrapper {
            width: 40vw;
        }
    }
</style>
