<template>
    <div class="d-flex flex-column justify-content-center align-items-center h-100 w-100">
        <router-link to="/" class="btn btn-primary">Play Again</router-link>
        <div class="col col-md-8 flex-column flex-md-row text-primary flex-wrap d-flex p-2 justify-content-center align-items-center">
            <div v-for="(score,index) in scores" :key="index" class="tile p-2 col col-md-4">
                <div class="w-100 h-100 score-container d-flex justify-content-center align-items-center flex-column">
                    <h3 :class="score <=0 ? 'text-danger':null">{{index.toString().toUpperCase()}}</h3>
                    <span :class="score <=0 ? 'text-danger':null">{{score}}</span>
                </div>
            </div>
            <h3 class="mb-3 text-center">Total Score: {{totalScore}} </h3>
        </div>
        <span class="text-danger">{{error}}</span>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ScoreBoard",
        data() {
            return {
                scores: {
                    round1: 0,
                    round2: 0,
                    round3: 0,
                    round4: 0,
                    round5: 0,
                    round6: 0,
                },
                totalScore: 0,
                error: null
            }
        },
        methods: {},
        mounted() {
            const username = this.$store.getters.username;
            axios.post('/scoreBoard', {username: username})
                .then(response => {
                    const score = {
                        round1: Number(response.data.round1),
                        round2: Number(response.data.round2),
                        round3: Number(response.data.round3),
                        round4: Number(response.data.round4),
                        round5: Number(response.data.round5),
                        round6: Number(response.data.round6),
                    }
                    this.totalScore = score.round1 + score.round2 + score.round3 + score.round4 + score.round5 + score.round6;
                    this.scores = {...score};
                }).catch(err => {
                this.error = err.response.data.error;
            })
        },
    }
</script>

<style scoped lang="scss">
    .holder {
        border: 0.1px solid #5B7503;
        height: auto;

        & .start {
            font-size: 3rem;
            font-weight: bolder;
        }
    }

    .tile {
        /*min-width: 150px;*/
        height: 50%;
    }

    .score-container {
        box-shadow: black 0 0.05rem 0.2rem;
    }
</style>