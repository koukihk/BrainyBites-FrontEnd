<template>
    <div>
        <editor-brief class="editor-brief" :articleAuthor="articleAuthor"></editor-brief>
        <edit-entrance class="edit-entrance"></edit-entrance>
        <hot-article :title="hotArticle.title" :hot-articles="hotArticle.hotArticles"></hot-article>
    </div>
</template>


<script>
    import EditEntrance from '../common/EditEntrance'
    import HotArticle from '../common/HotArticle'

    import EditorBrief from "../common/EditorBrief";

    export default {
        name: 'RightMenu',
        components: {
            EditorBrief,
            EditEntrance, HotArticle
        },
        data: function () {
            return {
                hotArticle: {
                    title: '',
                    hotArticles: [
                    ]
                },
                articleAuthor: {
                    cusId: 8,
                    cusName: 'BrainyBites官方',
                    cusAvatarUrl: '../../assets/image/Authority.svg',
                },
            }
        }
    }
</script>

<style scoped>
    .editor-brief, .edit-entrance {
        margin-bottom: 10px;
    }
</style>