<template>
    <form novalidate class="md-layout">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
                <div class="md-title">Login</div>
            </md-card-header>

            <md-card-content>
                <md-field>
                    <label for="email">Email</label>
                    <md-input v-model="email" type="text" name="email" id="email"/>
                </md-field>
                <md-field>
                    <label>Password toggle</label>
                    <md-input v-model="password" type="password"></md-input>
                </md-field>
            </md-card-content>
            <md-button class="md-active" @click.prevent="signIn">sign in</md-button>
        </md-card>
    </form>
</template>

<script>

import {store} from "../store/store";

export default {
        name: "Login",
        data() {
            return {

                email: '',
                password: ''
                ,

            }
        },
        methods: {
            signIn() {
                const user = {
                    email: this.email,
                    password: this.password
                }
                store.dispatch('signIn', user
                )
            }

        }
    }

</script>

<style scoped>

</style>
