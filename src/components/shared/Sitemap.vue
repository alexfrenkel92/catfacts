<template>
    <div class="container">
        <p class="top-text">Caturday's sitemap</p>
        <hr />
        <div class="row">
            <div class="col-md-auto">
                <ul class="list-group list-group-flush">
                    <router-link to="/" activeClass="active" class="nav-item nav-link" tag="li">
                        <a>Home</a>
                    </router-link>
                    <router-link
                        to="/categories"
                        activeClass="active"
                        class="nav-item nav-link"
                        tag="li"
                    >
                        <a>Categories</a>
                    </router-link>
                    <router-link
                        to="/catfacts"
                        activeClass="active"
                        class="nav-item nav-link"
                        tag="li"
                    >
                        <a>Catfacts</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.top-text {
    font-size: 20px;
    padding-left: 8px;
    margin: 0;
    font-weight: 500;
}
.list-group-item {
    padding: 0 15px 15px 15px;
}
</style>