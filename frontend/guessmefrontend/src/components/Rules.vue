<template>
    <div class="start d-flex flex-column justify-content-center align-items-center h-100 w-100 mt-5 ">
        <div class="d-flex flex-column justify-content-around align-items-center holder col-8 text-primary p-5">
            <div>
                <h3 class="text-center mb-4">Important Notice</h3>
                <p class="text-center">Guess Me consist of 6 rounds. In each round you have to guess the right colour by
                    clicking on the button.
                    If the guess is right, then you are awarded with positive points. If the guess is wrong,
                    then you are awarded with negative points. After each guess you moves to the next round and on
                    completion
                    of round 6 the game gets over.
                </p>
                <p class="text-center">At the end of the game the score is displayed.</p>
            </div>
            <button @click="$router.back()" class="start text-white text-decoration-none btn btn-primary">Go Back</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Rules"
    }
</script>

<style scoped lang="scss">
    .holder {
        border: 0.1px solid #5B7503;

        & .start {
            font-size: 3rem;
            font-weight: bolder;
        }
    }

</style>