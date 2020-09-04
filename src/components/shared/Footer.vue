<template>
    <nav class="navbar fixed-bottom center navbar-light">
        <router-link to="/sitemap">
            <a class="navbar-brand" href="#">Sitemap</a>
        </router-link>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-brand {
    font-size: 15px;
    font-weight: 500;
    color: palegoldenrod;
    text-decoration: none;
}
.navbar.center:hover {
    background-color: #e74c3c;
    text-decoration: none;
}
.navbar-brand:hover {
    color: palegoldenrod;
}
.navbar.center {
    display:inline-block;
    text-align: center;
    align-content: center;
    float: none;
    height: 40px;
    background: #2b2b2b;
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px #0e0e0e;
    box-shadow: 2px 2px 3px #888;
}
</style>
    