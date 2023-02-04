<template>
    <div>
        <edit-entrance class="edit-entrance"></edit-entrance>
        <hot-article :title="hotArticle.title" :hot-articles="hotArticle.hotArticles"></hot-article>
    </div>
</template>


<script>
    import EditEntrance from '../common/EditEntrance'
    import HotArticle from '../common/HotArticle'

    import NP from '../../assets/image/NP.png'

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
                        { artId: '1', artTitle: 'This is the template title of news', artImage: NP},
                        { artId: '2', artTitle: 'This is the template title of news', artImage: ''},
                        { artId: '3', artTitle: 'This is the template title of news', artImage: ''},
                        { artId: '4', artTitle: 'This is the template title of news', artImage: NP},
                        { artId: '5', artTitle: 'This is the template title of news', artImage: NP},
                        { artId: '6', artTitle: 'This is the template title of news', artImage: NP},
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

