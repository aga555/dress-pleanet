<template>
    <form class="md-layout">

        <md-card class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
                <div class="md-title"><h4>Add new dress to stock</h4></div>
            </md-card-header>

            <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">

                        <md-field>
                            <label> Name</label>
                            <md-input name="name" id="name" v-model="newDress.name"/>

                        </md-field>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">

                        <md-field>
                            <label>Size</label>
                            <md-select name="size" id="size" v-model="newDress.size" multiple>
                                <md-option value=34>34</md-option>
                                <md-option value=36>36</md-option>
                                <md-option value=38> 38</md-option>
                                <md-option value=40 v>40</md-option>
                                <md-option value=42> 42</md-option>
                            </md-select>

                        </md-field>
                    </div>
                </div>
                <md-field>
                    <label for="price">price</label>
                    <md-input type="text" name="price" id="price" v-model="newDress.price"/>

                </md-field>
                <md-field>
                    <label>description</label>
                    <md-textarea type="text" name="description" id="description" v-model="newDress.description"/>

                </md-field>


            </md-card-content>

            {{newDress}}
            <md-button class="md-accent" @click="add"> add dress to stock</md-button>
        </md-card>


    </form>

</template>

<script>
    import {store} from "../store/store";


    export default {
        name: "NewDressAdd",
        data: function () {

            return {

                newDress: {

                    id: '',
                    name: '',
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.",
                    size: [],
                    price: '',
                    img:''
                    //url: '../assets/dress-green.jpg'
                    //  url: "https://pixabay.com/pl/photos/kobieta-m%C5%82ody-r%C3%B3%C5%BCowy-%C5%82adny-pi%C4%99kny-3075704/"
                },

            }
        },
       /* created(){
            this.newDress.id=  Math.random().toString(36).substring(7);
        },*/
        components: {

        },
        methods: {
            add() {
                //   dbStockRef.add(this.newDress);alert('ok');
                store.dispatch('addStockItem', this.newDress);
            }
        }

    }

</script>

<style scoped>

</style>
