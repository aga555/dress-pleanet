<template>
    <div class="background">
        <div class="background-overlay">

            <h3> Ready for shopping ? </h3>
            <button class="shopping-button">Lets order</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
.background{
    background: url("../assets/shop.jpg")center;
    background-size: cover;
    height: 30vh;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
}
    .background-overlay{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;

    }
    h3{
        color: white;
        margin: 30px;
        font-size: 30px;
    }
    .shopping-button{
        margin-top: 10px;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
        background: white;
        border-radius: 5px;

    }
</style>
