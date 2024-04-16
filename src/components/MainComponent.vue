<template>
    <div class="container my-3 selected">
        <select class="form-select" @change="$emit('statusSearch')" v-model="store.statusFilter">
         <option value="">All</option>
         <option :value="archetype.archetype_name" v-for="archetype in store.archetypeList">{{ archetype.archetype_name }}</option>
        </select>
    </div>
    <main class="container p-3 ">
        <div class="found my-3  "><h6 class="text-white p-3">found 20 cards</h6></div>
        <CardList/>
    </main>
</template>

<script>
import {store} from '../store.js';
import CardList from './CardList.vue'
    export default {
        name: 'MainComponent',
        emits: ['statusSearch'],
        components: {
            CardList
        },
        data(){
            return{
                store
            }
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
    .selected{
        width: 15%;
    }

</style>