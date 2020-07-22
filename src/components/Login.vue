<template>
    <form novalidate class="md-layout" >
        <md-card class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
                <div class="md-title">Login</div>
            </md-card-header>

            <md-card-content>
                <md-field >
                    <label for="email">Email</label>
                    <md-input type="email" name="email" id="email"   />
                </md-field>
                <md-field>
                    <label>Password toggle</label>
                    <md-input  type="password"></md-input>
                </md-field>
            </md-card-content>
            <md-button class="md-active">sign in</md-button>
        </md-card>
    </form>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
