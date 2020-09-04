<template>
    <nav class="navbar fixed-bottom center navbar-light">
        <router-link to="/sitemap" activeClass="active" class="nav-item navbar-brand nav-link">
            <a>Sitemap</a>
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
    color: rgb(27, 26, 26);
    text-decoration: none;
}
.navbar.center {
    display:inline-block;
    text-align: center;
    align-content: center;
    float: none;
    background-color: gainsboro;
    height: 40px;
}
</style>
    