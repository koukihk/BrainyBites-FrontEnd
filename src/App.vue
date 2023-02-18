<template>
    <div id="app" class="app">
        <router-view/>
        <el-backtop target=".app"><i class="el-icon-caret-top"></i></el-backtop>
    </div>
</template>

<style>
    .app {
        height: 100vh;
        overflow-x: hidden;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #02abe9d1;
    }

    #nav a.router-link-exact-active {
        color: #02ABE9;
    }

    .clear-float:after {
        content: '.';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .clear-float {
        zoom: 1;
    }

</style>
