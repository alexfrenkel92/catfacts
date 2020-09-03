<template>
    <nav class="navbar sticky-top navbar-expand-lg">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
                <ul class="nav navbar-nav">
                    <router-link to="/" activeClass="active" class="nav-item nav-link" tag="li">
                        <a>Home</a>
                    </router-link>
                    <router-link to="/categories" activeClass="active" class="nav-item nav-link" tag="li">
                        <a>Categories</a>
                    </router-link>
                    <router-link to="/randomizer" activeClass="active" class="nav-item nav-link" tag="li">
                        <a>Randomizer</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped>
    a {
        font-size: 20px;
        font-weight: 500;
        color: rgb(27, 26, 26);
        text-decoration: none;
    }
    .sticky-top {
        background-color: gainsboro;
        margin: 10px 0;
        border-radius: 5px;
        color: chartreuse;
    }
    
</style>
    