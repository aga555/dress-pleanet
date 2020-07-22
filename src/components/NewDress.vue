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
                            <md-input name="name" id="name"/>

                        </md-field>
                    </div>
                </div>
              <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">

                        <md-field>
                            <label>Size</label>
                            <md-select name="size" id="size" >
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
                    <md-input type="text" name="price" id="price"  />

                </md-field>
                <md-field>
                    <label for="description">description</label>
                    <md-textarea type="text" name="description" id="description"  />

                </md-field>

            </md-card-content>


        </md-card>


    </form>

</template>

<script>
    export default {
        name: "NewDress"
    }
</script>

<style scoped>

</style>
