<template>
  <HeaderComponent/>
  <MainComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import axios from 'axios';
import {store} from './store.js';
  export default {
    name: 'App',
    components: {
      HeaderComponent,MainComponent
    },
    data(){
      return {
        store
      }
    },
    methods: {
      getCard(){
        axios.get(store.ApiUrl).then((res) => {
          this.store.cards=res.data.data
          console.log(res)
        })
      }
    },
    created(){
      this.getCard()
    }
  }
</script>

<style lang="scss" scoped>

</style>