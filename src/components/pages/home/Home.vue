<template>
    <div class="container">
        <p class="top-text">
            10 random cat breed
            <span class="filter">
                <div class="btn-group">
                    <img
                        src="../../../static/filter.svg"
                        width="40"
                        height="25"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        alt="filter icon"
                    />
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item" type="button" v-on:click="orderAsc">Ascending</button>
                        <button class="dropdown-item" type="button" v-on:click="orderDesc" >Descending</button>
                    </div>
                </div>
            </span>
        </p>
        <hr />
        <div class="row">
            <div class="col-md-auto">
                <ul class="list-group list-group-flush">
                    <Catdetail
                        v-for="breed in orderBy(breeds, `${ order }`, number)"
                        v-bind:key="breed.id"
                        v-bind:breed="breed"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Vue2Filters from "vue2-filters";
import Catdetail from "./Catdetail.vue";

@Component({
    components: {
        Catdetail,
    },
    mixins: [Vue2Filters.mixin],
})
export default class Home extends Vue {
    order = "";
    number = 1;

    mounted() {
        this.$store.dispatch("fetchRandomBreeds");
    }
    get breeds() {
        return this.$store.state.randomBreeds;
    }
    orderAsc() {
        this.order = "name";
        this.number = 1;
    }
    orderDesc() {
        this.order = "name";
        this.number = -1;
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
.filter {
    float: right;
}
.dropdown-menu {
    background-color: #2b2b2b;
    padding: 0;
    margin: 0;
    border-radius: 5px;
}
.btn-group, .dropdown-item {
    cursor: pointer;
    color: palegoldenrod;
}
.dropdown-item:hover {
    background-color: #e74c3c;
    border-radius: 5px;
}
</style>