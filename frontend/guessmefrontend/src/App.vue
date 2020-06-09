<template>
    <div>
        <router-view/>
    </div>
</template>

<style lang="scss">

</style>
<script>
    export default {
        components: {},
        created() {
            const round = localStorage.getItem('round');
            const username = localStorage.getItem('username');
            this.$store.dispatch('autoLoadState', {round, username});
            history.pushState(null, null, '/');
            window.addEventListener('popstate', function (event) {
                history.pushState(null, null, '/');
            });
        },
    }
</script>