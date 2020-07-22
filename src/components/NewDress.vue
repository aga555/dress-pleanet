<template>
    <form  class="md-layout">

        <md-card class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
                <div class="md-title"><h4>Add new dress to stock</h4></div>
            </md-card-header>

            <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">

                        <md-field>
                            <label> Name</label>
                            <md-input name="name" id="name" v-model="newDress.title"/>

                        </md-field>
                    </div>
                </div>
              <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">

                        <md-field>
                            <label>Size</label>
                            <md-select name="size" id="size"  v-model="newDress.options">
                                <md-option value=36>36</md-option>
                                <md-option value=38>38</md-option>
                                <md-option value=40>40</md-option>
                                <md-option value=42>42</md-option>
                            </md-select>

                        </md-field>
                    </div>
                </div>
                <md-field>
                    <label for="price">price</label>
                    <md-input type="text" name="price" id="price" v-model="newDress.price"  />

                </md-field>
                <md-field>
                    <label for="description">description</label>
                    <md-textarea type="text" name="description" id="description" v-model="newDress.description"  />

                </md-field>

            </md-card-content>

{{newDress}}<md-button class="md-accent" @click="add"> aa</md-button>
        </md-card>


    </form>

</template>

<script>
    export default {
        name: "NewDressAdd",
        data: function () {
            return {

                newDress: {

                    id: 1,
                    title: " Black dress",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.",
                    options: [
                        {size: 36},
                        {size: 38},
                        {size: 40}
                    ],
                    price: 200,
                    //url: '../assets/dress-green.jpg'
                    //  url: "https://pixabay.com/pl/photos/kobieta-m%C5%82ody-r%C3%B3%C5%BCowy-%C5%82adny-pi%C4%99kny-3075704/"
                },

            }
        },
        methods:{
            add(){
                alert('')
            }
        }

    }
</script>

<style scoped>

</style>
