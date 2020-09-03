<template>
    <div class="container">
            <!-- <app-movies></app-movies> -->
            <app-cats></app-cats>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Cats from "./Cats.vue";

@Component({
    components: {
        'app-cats': Cats
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