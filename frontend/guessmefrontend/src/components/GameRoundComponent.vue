<template>
    <div class="d-flex flex-column justify-content-center align-items-center h-100 w-100">
        <div class="holder col col-sm-8 text-primary flex-column flex-sm-row flex-wrap d-flex p-2 flex-wrap align-items-center justify-content-center h-100 w-100 mt-5">
            <div v-for="(tile,index) in colors" :key="index" class="tile p-2 col col-sm-3">
                <div @click="colorChoiceHandler(index+1)" class="w-100 h-100 cursor-pointer"
                     :style="{backgroundColor:colors[index]}"></div>
            </div>
        </div>
        <span class="mt-3">Make your guess!</span>
        <span class="text-danger">{{error}}</span>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "GameRoundComponent",
        data() {
            return {
                colors: [
                    '#EB6969', '#AECB4E', '#5CA2D8', '#76E2A9',
                    '#6C6CB9', '#DB85CA', '#79DFEB', '#FFED7B'
                ],
                error: null
            }
        },
        methods: {
            shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            },
            colorChoiceHandler(choice) {
                const username = this.$store.getters.username;
                const round = this.$store.getters.round;
                axios.post('/updateScore', {colorChoice: choice, username, round})
                    .then(response => {
                        if (this.$store.getters.round < 6) {
                            this.$store.dispatch('round', Number(round) + 1);
                            this.$router.push('/level');
                        } else {
                            this.$router.push('/scoreboard');
                        }
                    })
                    .catch(err => {
                        this.error = err.response.data.error;
                    })
            }
        },
        mounted() {
            this.shuffleArray(this.colors);
        }
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

    .tile {

        @media screen and (min-width: 460px) {
            width: 25%;
            height: 200px;
        }
        @media screen and (max-width: 470px) {
            /*height: 150px;*/
        }
    }
</style>