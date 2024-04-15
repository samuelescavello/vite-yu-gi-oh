<template>
    <div class="card">
        <img src="immagine" class="card-img-top" alt="name">
        <div class="card-body">
            <h5 class="card-title">{{nome}}</h5>
            <p class="card-text">
                <span>{{ nome }}</span><br>
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

<style lang="scss" scoped></style>