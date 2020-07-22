<template>
    <form novalidate class="md-layout">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
                <div class="md-title">Login</div>
            </md-card-header>

            <md-card-content>
                <md-field>
                    <label for="email">Email</label>
                    <md-input v-model="form.email"  type="text" name="email" id="email"/>
                </md-field>
                <md-field>
                    <label>Password toggle</label>
                    <md-input v-model="form.password" type="password"></md-input>
                </md-field>
            </md-card-content>
            <md-button class="md-active" @click.prevent="signIn">sign in</md-button>
        </md-card>
    </form>
</template>

<script>
    import {firebaseAuth} from "@/Firebase";

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },

            }
        },
        methods: {
            async signIn() {
                try {
                    await firebaseAuth.signInWithEmailAndPassword(  this.form.email, this.form.password);
                    alert('log ok')
                }
                catch (error) {
                    const errorCode = error.code
                    const errorMess = error.message
                    if (errorCode === 'auth/wrong-password') {
                        alert('wrong password')
                    } else {
                        alert(errorMess)
                        console.log(this.form.email,this.form.password )
                    }
                }

            }
        }
    }
</script>

<style scoped>

</style>
