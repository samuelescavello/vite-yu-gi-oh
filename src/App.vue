<template>
  <HeaderComponent/>
  <MainComponent @statusSearch="setParams"/>
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

      setParams(){
        if(this.store.statusFilter){
          this.store.options.params.archetype = this.store.statusFilter
        }else{
          delete this.store.options.params.archetype
        }
        this.getCard()
      },
      getCard(){
        console.log(this.store.statusFilter)
        axios.get(this.store.ApiUrl + this.store.endpoint.infCard, this.store.options).then((res) => {
          this.store.cards=res.data.data;

          // console.log(this.store.cards)
        })
        .catch(function (error) {
          // console.log(error);
        }).finally(function () {
          // always executed
        });
      },
      getAll(){
        axios.get(this.store.ApiUrl + this.store.endpoint.archetype).then((res) => {
          this.store.archetypeList = res.data.slice(0, 10);
          // console.log(this.store.archetypeList);
        })
        .catch(function (error) {
          // console.log(error);
        }).finally(function () {
          // always executed
        });
      }
    },
    created(){
      this.getCard();
      this.getAll();
    }
  }
</script>

<style lang="scss" scoped>

</style>