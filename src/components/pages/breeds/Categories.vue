<template>
    <div class="container">
        <p class="ghibli">Cat breeds</p><hr>
        <div class="row">
            <div class="col-md-auto">
                <p>Categories page</p>
                    <!-- <app-breed 
                    v-for="breed in breeds" 
                    v-bind:key="breed.id" 
                    v-bind:breed="breed"></app-breed> -->
            </div>
        </div>
    </div>
</template>

<script>
// import Breed from "./Breed.vue";

// export default {
//     components: {
//         "app-breed": Breed,
//     },
//     mounted() {
//         this.$store.dispatch("fetchBreeds");
//     },
//     computed: {
//         breeds() {
//             return this.$store.state.breeds;
//         },
//     },
// };
</script>

<style scoped>
.ghibli {
    font-size: 20px;
    padding-left: 8px;
    margin: 0;
    font-weight: 500;
}
</style>