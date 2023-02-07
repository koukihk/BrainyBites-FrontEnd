<template>
    <div>
        <tiny-article v-for="(tinyArticle, i) in tinyArticles" :key="i" :tinyArticle="tinyArticle"></tiny-article>
        <span class="bottom-tip">我也是有底线哒 ~</span>
    </div>
</template>

<script>
    import TinyArticle from "../common/TinyArticle";
    export default {
        name: "TinyCenter",
        components: {TinyArticle},
        data: function () {
            return {
                tinyArticles: [ ],
            }
        }
    }
</script>

<style scoped>

</style>