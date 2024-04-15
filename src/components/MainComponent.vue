<template>
    <main class="container">
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
        background-color: white
    }
</style>