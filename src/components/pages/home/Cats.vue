<template>
    <div>
        <p class="ghibli">Ghibli productions' movies collection</p>
        <hr />
        <!-- <input v-model="filteredText" />
        <button v-on:click="consoleText">click</button>-->
        <div class="row">
            <div class="col-md-auto">
                <ul class="list-group list-group-flush">
                    <p>Movies comes here</p>
                    <!-- <app-movie
                        v-for="movie in movies"
                        v-bind:key="movie.id"
                        v-bind:movie="movie"
                        v-bind:movieTitles="movieTitles"
                        v-bind:filterTitles="filterTitles"
                    ></app-movie> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {GetterTree, MutationTree, ActionTree} from "vuex";

// import Movie from "./Movie.vue";

@Component({
    components: {
        
    }
})

export default class Movies extends Vue{
    
    // computed: {
    //     movies() {
    //         return this.$store.state.movies.slice(0, 10);
    //     },
    
  @Prop(Number) readonly propA: number | undefined

    get movies() {
        return this.$store.state.movies.slice(0, 10);
    }

    mounted() {
        // this.$store.dispatch("fetchMovies");
        console.log('mounted')
    }

    consoleText() {
        console.log('Works')
    }


    // mounted() {
    //     this.$store.dispatch("fetchMovies");
    // },
    // methods: {
    //     consoleText() {
    //         console.log(this.movieTitles);
    //     },
    // },

}

</script>

import Movie from "./Movie.vue";

export default {
    computed: {
        movies() {
            return this.$store.state.movies.slice(0, 10);
        },
    components: {
        "app-movie": Movie,
    },
    mounted() {
        this.$store.dispatch("fetchMovies");
    },
    methods: {
        consoleText() {
            console.log(this.movieTitles);
        },
    },
};

<style scoped>
.ghibli {
    font-size: 20px;
    padding-left: 8px;
    margin: 0;
    font-weight: 500;
}
</style>