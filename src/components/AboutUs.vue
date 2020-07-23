<template>
    <div>
        <h3> Click links belowe for more info</h3>

        <ul>

            <router-link to="/guide">
                <a class="nav"> guide </a>
            </router-link>
            <router-link to="/history">
                <a class="nav"> History </a>
            </router-link>
            <router-link to="/delivery">
                <a class="nav">Delivery </a>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "AboutUs"
    }
</script>

<style scoped>

</style>
