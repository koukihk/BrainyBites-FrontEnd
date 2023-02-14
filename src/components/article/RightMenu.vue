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

    import NP from '../../assets/image/NP.png'
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
                    title: 'Loading',
                    hotArticles: [
                        { artId: '8071', artTitle: 'Loading......', artImageUrl: ''},
                    ]
                },
                articleAuthor: {
                    cusId: 8071,
                    cusName: 'Default',
                    cusAvatarUrl: '../../assets/image/User.svg',
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