<template>
    <div class="container">
        <p class="catfact">{{ catfact }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Catfact extends Vue {
    @Prop() catfact: any;
}
</script>

<style scoped>
.catfact {
    text-align: center;
    padding: 30px;
}
</style>