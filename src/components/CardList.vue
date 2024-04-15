<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 ">
            <div class="col" v-for="card in store.cards " :key="card.id">
                <CardComponent :id="card.id" :nome="card.name" :specie="card.archetype" :immagine="card.card_images[0].image_url"/>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../store.js';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        components: {
            CardComponent
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>