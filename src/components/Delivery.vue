<template>

        <div class="row col-sm-12" style="display: flex">
            <div class="col-6" style="width: 40vw; margin-left: 30px">
                <h2 class="about-heading"> Delivery </h2>
                <p class="about-text">The dress can be delivered within the city of Warsaw and surrounding areas,<br>
                    but we also deliver nationwide. The cost of nationwide deliveries in accordance with the price list of courier services provider.
                    Courier parcels are dispatched on the next working day.<br>

                </p>
                <p class="about-text">
                    <strong>   We deliver:  from Monday to Friday: 9-18</strong>
                </p>
            </div>

            <div class="col-6">
                <img src="../assets/delivery_burned.png" >
            </div>
        </div>

</template>

<script>
    export default {
        name: "Delivery"
    }
</script>

<style>
    .about-heading {
        font-size: 42px;
        letter-spacing: 1.5px;

    }

    .about-text {
        text-align: left;
        font-size: 16px;
        letter-spacing: 1.1px;
        line-height: 1.6;
    }
</style>
