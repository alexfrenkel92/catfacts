<template>
    <div class="container">
        <p class="catbreeds">
            List of all cat breeds
            <span class="search">
                <img src="../../../static/search.svg" width="40" height="25" alt="search icon">
                <input v-model="filterText" size="7"/>
            </span>
        </p>
        <hr />
        <div class="row">
            <div class="col-md-auto">
                <Breed v-for="breed in searchForBreed" v-bind:key="breed.id" v-bind:breed="breed" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { filter } from "vue/types/umd";
import Breed from "./Breed.vue";

@Component({
    components: {
        Breed,
    },
})
export default class Categories extends Vue {
    filterText = "";
    filteredBreedMethod = [];

    mounted() {
        this.$store.dispatch("fetchBreeds");
    }
    get breeds() {
        return this.$store.state.breeds;
    }
    get searchForBreed() {
        const result = this.filterText.toLowerCase().trim();
        if (!result) {
            return this.breeds;
        } else
            return this.breeds.filter(
                (breed) => breed.name.toLowerCase().indexOf(result) > -1
            );
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
.search {
    float: right;
}
input {
    border-radius: 5px;
    border: 1px solid;
    font-size: 17px;
}
body {
    margin-bottom: 30px;
}
.col-md-auto {
    width: 100%;
}
</style>