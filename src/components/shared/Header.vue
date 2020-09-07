<template>
    <div class="sticky-top">
        <span class="decor"></span>
        <nav class="navbar navbar-expand-lg navbar-light">
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link
                        to="/"
                        activeClass="active"
                        class="nav-item nav-link home"
                        tag="li"
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                    >
                        <a>Home</a>
                    </router-link>
                    <router-link
                        to="/categories"
                        activeClass="active"
                        class="nav-item nav-link"
                        tag="li"
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                    >
                        <a>Categories</a>
                    </router-link>
                    <router-link
                        to="/catfacts"
                        activeClass="active"
                        class="nav-item nav-link"
                        tag="li"
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                    >
                        <a>Catfacts</a>
                    </router-link>
                </ul>
            </div>
        </nav>
    </div>
</template>


<style scoped>
a {
    font-size: 20px;
    font-weight: 500;
    padding-left: 10px;
    color: palegoldenrod;
    text-decoration: none;
}
.navbar-expand-lg {
    margin: 0 0 10px 0;
    padding: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 100%;
    background: #2b2b2b;
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px #0e0e0e;
    box-shadow: 2px 2px 3px #888;
}
.decor {
    background: #e74c3c;
    padding: 2px;
    margin: 10px 0 0 0;
    display: block;
}
li:hover {
    background-color: #e74c3c;
}
.home:hover {
    border-bottom-left-radius: 5px;
}
</style>
    