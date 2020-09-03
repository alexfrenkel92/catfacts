<template>
    <div class="container">
            <!-- <app-movies></app-movies> -->
            <Movies />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Movies from "./Movies.vue";

@Component({
    components: {
        Movies
    }
})

export default class Home extends Vue{}
// export default {
//     components: {
//         "app-movies": Movies,
//     },
// };
</script>

<style>
</style>