<template>
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
        <div class="d-flex flex-column justify-content-center align-items-center ">
            <h1 class="title text-primary">Level {{$store.getters.round}}</h1>
            <div class="timer d-flex justify-content-center align-items-center">
                <span class="text-primary">{{timer}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Level",
        data() {
            return {
                timer: 5,
            }
        },
        methods: {
            countDownTimer() {
                if (this.timer > 0) {
                    setTimeout(() => {
                        this.timer -= 1
                        this.countDownTimer()
                    }, 1000)
                }
                if (this.timer === 0) {
                    this.$router.push('/round')
                }
            }
        },
        mounted() {
            this.countDownTimer();
        }
    }
</script>

<style scoped lang="scss">
    .title {
        font-family: 'Monoton', cursive;
        font-size: 5rem;
    }

    .input {
        box-shadow: #5B7503 0 0.05rem 0.1rem;
        width: 100%;
        height: 4rem;

        &:focus {
            border: none;
            outline: none;
            box-shadow: #5B7503 0 0.1rem 0.3rem;
        }
    }

    .timer {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        border: solid #5B7503 2px;
    }

</style>