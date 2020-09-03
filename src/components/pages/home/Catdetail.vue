<template>
    <div>
        <router-link
            v-if="hideDetails"
            v-bind:to="{ params: { id: movie.id } }"
            tag="li"
            class="list-group-item"
            style="cursor: pointer">
            <p class="movies" v-on:click="hideDetails = !hideDetails">
                {{ movie.title }} ({{ movie.release_date }})</p>
        </router-link>
        <template v-else>
            <div class="container">
                <p class="movie-title">Movie details</p>
                <div class="row">
                    <div class="col-md-auto list-group-flush">
                        <ul class="list-group">
                            <li class="list-group-item"><span>Title: </span>{{ movie.title }}</li>
                            <li class="list-group-item"><span>Description: </span>{{ movie.description }}</li>
                            <li class="list-group-item"><span>Director: </span>{{ movie.director }}</li>
                            <li class="list-group-item"><span>Producer: </span>{{ movie.producer }}</li>
                            <li class="list-group-item"><span>Release date: </span>{{ movie.release_date }}</li>
                            <li class="list-group-item"><span>Score: </span>{{ movie.rt_score }}</li>
                        </ul>
                        <button
                            v-on:click="hideDetails = !hideDetails"
                            class="btn btn-primary"
                        >Close Details</button>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: ["movie"],
    data() {
        return {
            hideDetails: true,
        };
    },
    methods: {
        turnOnDetails() {
            this.hideDetails = true;
        },
    },
};
</script>

<style scoped>
.movie-title {
    font-size: 20px;
    margin: 0;
    font-weight: 500;
}
.movies {
    margin: 0;
    padding: 5px 5px 5px 0;
}
span {
    font-weight: 500;
}
.btn {
    border: 1px solid;
    border-radius: 3px;
    width: fit-content;
    background-color: rgb(252, 252, 207);
    padding: 3px 6px;
    color: black;
}
</style>