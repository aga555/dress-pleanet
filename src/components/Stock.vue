<template>
    <div class="menu-wrapper">
        <!--menu-->

        <div class="menu">
            <md-card md-flex="50" v-for="item in getStockItems" :key="item.id">


                <md-card-media>

                </md-card-media>

                <md-card-header>
                    <div class="md-title"  @click="goToDetail(item.id) "> {{item.name }}</div>

                    <div class="md-subhead">{{item.price}}</div>

                    <div class="md-subhead" v-for="(option,index) in item.options" :key="option[index]"> size:
                        {{option.size}}
                        <md-button @click="addToBasket(item, option)">
                            <md-icon>add</md-icon>
                        </md-button>


                    </div>
                </md-card-header>


                <md-card-content>
                    {{item.description}}
                </md-card-content>

            </md-card>


        </div>
        <!--shopping basket-->
        <div class="basket-wrapper">
            <h3> Basket </h3>
            <div v-if="basket.length>0">

                <md-list class="md-triple-line" v-for="(item,index) in basket" :key="basket[index]">

                    <md-list-item>

                        <div class="md-title">{{item.name}}</div>
                        <div class="md-subhead">{{item.size}}</div>
                        <div class="md-subhead">{{item.price}}</div>
                        <div class="md-subhead">{{item.price*item.quantity}}</div>

                        <md-button class="md-icon-button md-list-action" @click="increaseQuantity(item)">
                            <md-icon class="md-primary">add</md-icon>
                        </md-button>

                        <div class="md-subhead">{{item.quantity}}</div>
                        <md-button class="md-icon-button md-list-action" style="align-self: center"
                                   @click="decreaseQuantity(item)">

                            <md-icon class="md-primary">remove</md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-dense md-raised md-primary" @click="removeFomBasket(item)">
                            <md-icon>cached</md-icon>
                        </md-button>
                    </md-list-item>

                    <hr>

                </md-list>
                <h4> Total cost </h4>
                <md-button class="md-primary" @click="addNewOrder">order</md-button>
            </div>
            <div v-else>
                <p> {{basketText}}</p>
          {{this.$store.state.orders}}
            </div>

        </div>
    </div>
</template>

<script>

/*    class Item {
        constructor(name, img , price) {
              this.name=name;
        this.img =img;
        this.price=price
        }

    }*/

        import 'vue-material/dist/vue-material.min.css'
    import 'vue-material/dist/theme/default.css'


    export default {
        name: "Stock",
        data: function () {
            return {
                basketText: "Your Basket is empty",
                basket: [],

            }
        },
        computed: {
            getStockItems() {
                return this.$store.getters.getStockItems
            }
        },
        methods: {
            goToDetail(id){
                this.$router.push({name:'details',params:{id:id}})
            },
            async addToBasket(item, option) {
                const dressExist = await this.basket.find(
                    dress => dress.name === item.name && dress.size === option.size
                );
                if (dressExist) {
                    dressExist.quantity++;
                    return
                }
                this.basket.push({
                    name: item.name,
                    price: item.price,
                    size: option.size,
                    quantity: 1,
                })
            },
            decreaseQuantity(item) {
                item.quantity--
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

                this.$store.commit('addOrder',this.basket);
                this.basket = [];
                this.basketText = "Thank You, your order has been placed."
            }
        },


    }
</script>

<style scoped>
    .md-title{
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
