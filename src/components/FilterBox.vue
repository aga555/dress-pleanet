<template>
    <div>
        <div>
    <form class="filter" @submit.prevent="">
        <div v-for="(category,index) in category" :key="index" class="form-check form-check-inline">
            <md-checkbox
                    class="form-check-input"
                    type="checkbox"
                    v-model="category.checked"
                    v-on:change="getfilteredData"
            > {{ category.value }}
            </md-checkbox>


        </div>
    </form>
        </div>
        <div class="menu">
            <md-card md-flex="50" v-for="item in filteredData" :key="item.id">

                {{item}}
                <md-card-media>

                </md-card-media>

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


    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "FilterBox",


        data: function () {
            return {
                filteredData: [],
                setCategory: '',
                search: '',

                category: [
                    {checked: false, value: 'mini'},
                    {checked: false, value: 'maxi'},
                    {checked: false, value: 'midi'},
                ]

            }

        },
        methods: {
            getfilteredData: function () {
                this.filteredData = this.getStockItems;
                let filteredDataByfilters = [];/*
               // let filteredDataBySearch = [];      // first check if filters where selected
       */
                if (this.selectedFilters.length > 0) {
                    filteredDataByfilters = this.filteredData.filter(
                        obj => this.selectedFilters.some(val => obj.category.indexOf(val) >= 0));
                    this.filteredData = filteredDataByfilters;
                }
                // then filter according to keyword, for now this only affects the name attribute of each data
                /*      if (this.search !== '') {
                          filteredDataBySearch = this.filteredData.filter(obj => obj.name.indexOf(this.search.toLowerCase()) >= 0);
                          this.filteredData = filteredDataBySearch;
                      }*/
            }
        },
        computed: {
            ...mapGetters([
                'getStockItems'
            ]),
            selectedFilters: function () {
                let filters = [];
                let checkedFiters = this.category.filter(obj => obj.checked);
                checkedFiters.forEach(element => {
                    filters.push(element.value);
                });
                return filters;
            }
        },

        mounted() {
            this.getfilteredData();
        }


    }

</script>

<style scoped>

</style>
