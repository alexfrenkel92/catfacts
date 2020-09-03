<template>
    <div class="container">
        <p class="ghibli">List of all cat breeds</p>
        <hr />
        <div class="row">
            <div class="col-md-auto">
                <app-breed v-for="breed in breeds" v-bind:key="breed.id" v-bind:breed="breed"></app-breed>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Breed from "./Breed.vue";

@Component({
    components: {
        "app-breed": Breed,
    },
})
export default class Categories extends Vue {
    get breeds() {
        return this.$store.state.breeds;
    }

    mounted() {
        this.$store.dispatch("fetchBreeds");
    }
}
</script>

<style scoped>
.ghibli {
    font-size: 20px;
    padding-left: 8px;
    margin: 0;
    font-weight: 500;
}
</style>