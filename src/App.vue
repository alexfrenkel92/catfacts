<template>
    <div class="container">
        <Header />
        <keep-alive>
            <router-view :key="$route.fullPath"></router-view>
        </keep-alive>
        <Footer />
    </div>
</template>

<script lang="ts">
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {
        Header,
        Footer,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
    overflow-y: scroll;
    font-family: "PT Sans", Arial, Verdana;
    background-color: rgb(247, 244, 231);
}
</style>
