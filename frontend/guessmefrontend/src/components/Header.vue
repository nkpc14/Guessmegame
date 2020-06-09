<template>
    <b-navbar sticky toggleable="lg" variant="transparent">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto text-primary">
                <b-navbar-nav right>
                    <router-link v-if="$route.path !=='/'" to="/" class="text-primary mr-2 text-decoration-none" href="#">Quit</router-link>
                    <router-link to="/scoreboard" class="text-primary mr-2 text-decoration-none" href="#">Score</router-link>
                </b-navbar-nav>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
    .header {
        position: absolute;
        top: 0;
        width: 100vw;
    }
</style>