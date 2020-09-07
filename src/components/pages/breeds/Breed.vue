<template>
    <div class="col-md-auto">
        <p class="breed">
            <span>Breed name:</span>
            {{ breed.name }}
        </p>
        <p class="description">
            <span>Description:</span>
            {{ breed.description }}
        </p>
        <button class="btn btn-primary">

            <a v-bind:href="this.breed.wikipedia_url">Click for more details</a>
        </button>
        <hr />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Breed extends Vue {
    @Prop() breed: any;
}
</script>

<style scoped>
.breed {
    margin: 0;
    padding: 5px 5px 5px 0;
}
.btn {
    border: 1px solid #e74d3cb9;
    border-radius: 5px;
    width: fit-content;
    background-color: #e74d3cb9;
    padding: 3px 6px;
    color: black;
}
.btn:hover {
    background-color: #e74c3c;
}
a:link {
  color: black;
}

a:visited {
  color: black;
}

a:hover {
  font-weight: 400;
  text-decoration: none;
}
span {
    font-weight: bold;
}
</style>