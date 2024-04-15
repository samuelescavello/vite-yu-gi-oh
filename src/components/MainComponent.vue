<template>
    <main class="container my-3 ">
        <div class="found my-3 "><h6 class="text-white p-3">found 20 cards</h6></div>
        <CardList/>
    </main>
</template>

<script>
import CardList from './CardList.vue'
    export default {
        name: 'MainComponent',
        components: {
            CardList
        }
    }
</script>

<style lang="scss" scoped>
    main{
        background-color: white;
    }
    .found{
        background-color: #212529;
    }
</style>