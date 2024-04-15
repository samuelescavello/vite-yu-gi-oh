<template>
    <div class="card my-2">
        <img :src="immagine" class="card-img-top" :alt="name">
        <div class="card-body">
            <h5 class="card-title text-uppercase text-center text-white ">{{nome}}</h5>
            <p class="card-text text-center">
                <span>{{ specie }}</span>
            </p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['nome', 'specie', 'immagine','id']
}
</script>
    
<style lang="scss" scoped>
    .card{
        background-color: #D48F38;
    }
    .card-body{
        min-height: 120px;
    }
    span{
        font-weight: 700;
    }
</style>