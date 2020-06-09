<template>
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
        <div class="d-flex flex-column justify-content-center align-items-center ">
            <h1 class="title text-primary">GUESS ME</h1>
            <input v-model="username" class="input bg-light border-0 pl-3" type="text" placeholder="Enter your name">
            <button @click="submit" class="btn btn-primary mt-3">Submit</button>
            <span class="text-danger">{{error}}</span>
            <span class="text-primary mt-2">Need Help!</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "MainComponent",
        data() {
            return {
                username: '',
                error: null
            }
        },
        methods: {
            submit() {
                if (this.username.length < 1) {
                    this.error = "Username can't be empty"
                    return;
                }
                axios.post('/createGame', {username: this.username})
                    .then(response => {
                        console.log(response);
                        this.$store.dispatch('user', this.username);
                        this.$store.dispatch('round', 1);
                        this.$router.push('/start');
                    }).catch(err => {
                    this.error = err.response.data.error;
                })
            }
        },
        mounted() {
            localStorage.removeItem('round');
            localStorage.removeItem('username');
            this.$store.dispatch('user', null);
            this.$store.dispatch('round', 1);
        }
    }
</script>

<style scoped lang="scss">
    .title {
        font-family: 'Monoton', cursive;
        font-size: 5rem;
        @media  screen and (max-width:470px){
            font-size: 3rem;
        }
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
</style>