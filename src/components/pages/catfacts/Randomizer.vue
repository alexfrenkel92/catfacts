<template>
    <div class="container">
        <p class="catfact-header">Get random cat facts by pressing the button below</p>
        <hr><br />
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary" v-on:click="getCatfact">{{ btnText }}</button>
        </div>
        <br />
        <app-catfact v-bind:catfact="catfact"></app-catfact>
        <!-- <app-catfact v-bind:catfact="catfact"></app-catfact> -->
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Catfact from './Catfact.vue';

@Component({
    components: {
        'app-catfact': Catfact
    }
})
export default class Randomizer extends Vue {
    catfact = '';
    btnText = 'Give me one';

    get catfacts() {
        return this.$store.state.catfacts;
    }
    
    mounted() {
        console.log('Randomizer loaded');
        this.$store.dispatch('fetchCatfacts')
    }
    getCatfact() {
        const randomNr = Math.floor(Math.random() * (this.catfacts.all.length - 1)) + 1;
        this.catfact = this.catfacts.all[randomNr].text;
        this.btnText = "Another one";
    }
}
</script>

<style scoped>
.catfact-header {
    font-size: 20px;
    padding-left: 8px;
    margin: 0;
    font-weight: 500;
}
.btn {
    border: 1px solid;
    border-radius: 3px;
    width: fit-content;
    background-color: rgb(252, 252, 207);
    color: black;
    box-shadow: none;
}

</style>