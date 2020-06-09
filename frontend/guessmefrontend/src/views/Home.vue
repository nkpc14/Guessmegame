<template>
    <div class="home">
        <Header/>
        <router-view/>
    </div>
</template>

<script>

    import MainComponent from "../components/MainComponent";
    import Header from "../components/Header";

    export default {
        name: 'Home',
        components: {Header, MainComponent}
    }
</script>
<style lang="scss">
    .home{
        height: calc(100vh - 6rem);
    }
</style>