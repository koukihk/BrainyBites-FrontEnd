<template>
    <div>
        <edit-entrance class="edit-entrance"></edit-entrance>
        <hot-article :title="hotArticle.title" :hot-articles="hotArticle.hotArticles"></hot-article>
    </div>
</template>


<script>
    import EditEntrance from '../common/EditEntrance'
    import HotArticle from '../common/HotArticle'

    export default {
        name: 'RightMenu',
        components: {
            EditEntrance, HotArticle
        },
        data: function () {
            return {
                hotArticle: {
                    title: '大家都在看',
                    hotArticles: [
                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .edit-entrance {
        margin-bottom: 10px;
    }
</style>

