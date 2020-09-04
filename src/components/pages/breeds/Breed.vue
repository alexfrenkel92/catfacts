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
        <p class="url">
            <a v-bind:href="this.breed.wikipedia_url">Click for more details</a>
        </p>
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
.url {
    cursor: pointer;
    border: 1px solid;
    border-radius: 3px;
    width: fit-content;
    background-color: rgb(252, 252, 207);
    padding: 3px 6px;
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
    font-weight: 500;
}
</style>