<template>
    <div>
        <header>
            <top-bar class="top-bar" :customer="customer"></top-bar>
        </header>
        <main>
            <article>
                <article-main :articleMain="artMain"></article-main>
                <share :config="config"></share>
                <comment-reply-main :artId="artMain.artId" :artCusId="artMain.artCusId" :comments="comments" :customer="customer" @quickShow="quickShow"></comment-reply-main>
            </article>
            <aside>
                <editor-brief class="editor-brief" :articleAuthor="artMain.customer" :artSelfStatus="artMain.cusArtBehavior" :customer="customer" v-on:editor="jumpToCustomer"></editor-brief>
                <hot-article :title="page.hotTitle" :hot-articles="hotArticles"
                             v-on:refresh="refreshHot" v-on:jump="jumpToArticle"></hot-article>
            </aside>
        </main>
    </div>
</template>

<script>
    import TopBar from "../components/article/TopBar"
    import CommentReplyMain from "../components/article/CommentReplyCenter"
    import ArticleMain from "../components/article/ArticleCenter"
    import EditorBrief from "../components/common/EditorBrief"
    import HotArticle from "../components/common/HotArticle"

    import { getFullArt, getHotArtOnePage } from "../control/Load"
    import { getCusBasicInfo } from "../control/Self"
    import { getComList } from "../control/Discuss"
    import { jumpInCurPage, jumpInNewPage } from "../util/PageJump"

    export default {
        name: "ArticleView",
        components: { HotArticle, EditorBrief, ArticleMain, CommentReplyMain, TopBar },
        mounted: function() {
            let artId = this.$route.params.artId;
            getCusBasicInfo( 0 )
                .then( (response) => {
                    if (response.data) {
                        this.customer = response.data;
                    } else {
                        jumpInCurPage('/port');
                    }
                });
            getFullArt(artId)
                .then( (response) => {
                    this.artMain = response.data;
                });
            getHotArtOnePage(this.page.hotPage, this.page.hotPageSize)
                .then( (response) => {
                    this.hotArticles = response.data;
                });
            getComList(artId)
                .then( (response) => {
                    this.comments = response.data;
                });
            window.scrollTo(0, 0);
        },
        methods: {
            /**
             * ??????????????????
             */
            refreshHot: function () {
                if (this.page.hotPage > 3) {
                    this.page.hotPage = 0;
                } else {
                    this.page.hotPage += 1;
                }
                getHotArtOnePage(this.page.hotPage, this.page.hotPageSize)
                    .then( (response) => {
                        this.hotArticles = response.data;
                    })
                    .catch( () => {
                        this.$message.info("????????????????????????????????????????????????");
                    });
            },

            /**
             * ?????????????????????
             * @param artId
             */
            jumpToArticle: function (artId) {
                jumpInNewPage('/article/' + artId);
            },

            jumpToCustomer: function (cusId) {
                jumpInNewPage('/self/' + cusId);
            },

            quickShow: function () {
                let artId = this.$route.params.artId;
                getComList(artId)
                    .then( (response) => {
                        this.comments = response.data;
                    })
            }
        },
        data: function () {
            return {
                page: {
                    hotTitle: '???????????????',
                    hotPage: 0,
                    hotPageSize: 6,
                    // comPage: 0,
                    // comPageSize: 4
                },
                customer: {

                },
                artMain: {

                },
                hotArticles: [
                ],
                comments: [

                ]
            }
        }
    }
</script>

<style scoped src="../assets/css/Narrow.css"></style>
<style scoped>
    .editor-brief, .edit-entrance {
        margin-bottom: 10px;
    }


</style>