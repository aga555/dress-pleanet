<template>
    <div class="admin-wrapper">
        <admin-content v-if="currentUser!== null"></admin-content>
        <login v-if="currentUser === ''"></login>
    </div>
</template>

<script>


    import {mapGetters} from "vuex"
    import Login from "@/components/Login";

const AdminContent = () =>import('./AdminContent')
    export default {
        name: "Admin",


        components: {
            Login,
            AdminContent

        },
        computed: {
            ...mapGetters([ "currentUser"])

        },

    }


</script>

<style scoped>

</style>
