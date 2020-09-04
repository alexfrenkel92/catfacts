<template>
    <div class="container">
        <p class="top-text">10 random cat breed</p>
        <hr />
        <div class="row">
            <div class="col-md-auto">
                <ul class="list-group list-group-flush">
                    <Catdetail v-for="breed in breeds" v-bind:key="breed.id" v-bind:breed="breed" />
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Catdetail from "./Catdetail.vue";

@Component({
    components: {
        Catdetail,
    },
})
export default class Home extends Vue {
    mounted() {
        this.$store.dispatch("fetchRandomBreeds");
    }
    get breeds() {
        return this.$store.state.randomBreeds;
    }
}
</script>

<style scoped>
.top-text {
    font-size: 20px;
    padding-left: 8px;
    margin: 0;
    font-weight: 500;
}
</style>