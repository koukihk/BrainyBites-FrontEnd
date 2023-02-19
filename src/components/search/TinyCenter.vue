<template>
    <div>
        <tiny-article v-for="(tinyArticle, i) in tinyArticles" :key="i" :tinyArticle="tinyArticle"></tiny-article>
        <span class="bottom-tip">- Brainy Bites | Knowledge creates a better world -</span>
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
    .bottom-tip {
        font-size: 12px;
        color: gray;
        padding-top: 35px;
        padding-bottom: 35px;
        line-height: 27px;
    }
</style>