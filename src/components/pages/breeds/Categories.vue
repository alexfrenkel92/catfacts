<template>
    <div class="container">
        <p class="catbreeds">List of all cat breeds</p>
        <hr />
        <div class="row">
            <div class="col-md-auto">
                <Breed v-for="breed in breeds" v-bind:key="breed.id" v-bind:breed="breed" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Breed from "./Breed.vue";

@Component({
    components: {
        Breed
    },
})
export default class Categories extends Vue {
    mounted() {
        this.$store.dispatch("fetchBreeds");
    }
    get breeds() {
        return this.$store.state.breeds;
    }
}
</script>

<style>
.catbreeds {
    font-size: 20px;
    padding-left: 8px;
    margin: 0;
    font-weight: 500;
}
body {
    margin-bottom: 30px;
}
.col-md-auto {
    width: 100%;
}
</style>