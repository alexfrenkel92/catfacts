<template>
    <div>
        <router-link
            v-if="hideDetails"
            v-bind:to="{ params: { id: breed.id } }"
            tag="li"
            class="list-group-item"
            style="cursor: pointer"
        >
            <p class="breeds" v-on:click="hideDetails = !hideDetails">{{ breed.name }}</p>
        </router-link>
        <template v-else>
            <div class="container">
                <p class="movie-title">Breed details</p>
                <div class="row">
                    <div class="col-md-auto list-group-flush">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span>Name:</span>
                                {{ breed.name }}
                            </li>
                            <li class="list-group-item">
                                <span>Origin:</span>
                                {{ breed.origin }}
                            </li>
                            <li class="list-group-item">
                                <span>Lifespan:</span>
                                {{ breed.life_span }}
                            </li>
                            <li class="list-group-item">
                                <span>Temperament:</span>
                                {{ breed.temperament }}
                            </li>
                            <li class="list-group-item">
                                <span>Weight:</span>
                                {{ breed.weight.metric }}kg
                            </li>
                            <li class="list-group-item">
                                <span>Dog friendliness (0 - 5):</span>
                                {{ breed.dog_friendly }}
                            </li>
                            <li class="list-group-item">
                                <span>
                                    <a
                                        class="url"
                                        v-bind:href="breed.wikipedia_url"
                                    >Click for more details</a>
                                </span>
                            </li>
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

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Catdetails extends Vue {
    hideDetails = true;
    
    @Prop() breed: any;

    turnOnDetails() {
        this.hideDetails = true;
    }
}
</script>

<style scoped>
.movie-title {
    font-size: 20px;
    margin: 0;
    font-weight: 500;
}
.breeds {
    margin: 0;
    padding: 5px 5px 5px 0;
}
.list-group-item {
    padding: 0 15px 15px 15px;
    background-color: rgb(247, 244, 231);
}
span {
    font-weight: 500;
}
.btn {
    border: 2px solid #e74d3cb9;
    border-radius: 5px;
    width: fit-content;
    background-color: rgb(248, 243, 220);
    padding: 3px 6px;
    color: black;
}
.btn:hover {
    background-color: #e74c3c;
}

.url {
    cursor: pointer;
}
a:link {
    color: black;
}

a:visited {
    color: black;
}

a:hover {
    text-decoration: none;
}
</style>