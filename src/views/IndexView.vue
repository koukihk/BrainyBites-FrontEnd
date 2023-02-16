<template>
    <div>
        <header>
            <top-bar class="top-bar" :customer="customer"></top-bar>
        </header>
        <main>
            <nav>
                <left-menu :curIndex="page.menuCurIndex" :majorLength="page.menuMajorLen" :tip="page.menuTip"
                                 :artClassList="artTypes" v-on:changeCurIndex="changeCurIndex"></left-menu>
            </nav>
            <article>
                <tiny-article v-for="(tinyArticle, i) in tinyArticles" :key="i" :tinyArticle="tinyArticle"
                              v-on:jump="jumpToArticle" v-on:editor="jumpToCustomer"></tiny-article>
            </article>
            <aside>
                <edit-entrance class="edit-entrance"></edit-entrance>
                <hot-article :title="page.hotTitle" :hot-articles="hotArticles"
                             v-on:refresh="refreshHot" v-on:jump="jumpToArticle"></hot-article>
            </aside>
        </main>
        <footer>
            <bottom-bar></bottom-bar>
        </footer>
    </div>
</template>

<script>
    import TopBar from '../components/index/TopBar'
    import LeftMenu from "../components/index/LeftMenu"
    import BottomBar from '../components/index/BottomBar'
    import TinyArticle from '../components/common/TinyArticle'
    import EditEntrance from "../components/common/EditEntrance"
    import HotArticle from "../components/common/HotArticle"

    
    import { getArtTypes, getHotArtOnePage, getTinyArtOnePageByType } from "../control/Load";
    import { getCusBasicInfo } from "../control/Self";
    import { jumpInCurPage, jumpInNewPage } from "../util/PageJump";

    export default {
        name: 'IndexView',
        components: { HotArticle, EditEntrance, TinyArticle, TopBar, LeftMenu, BottomBar },
        mounted: function () {
            window.addEventListener('scroll', this.getMoreTinyArt, false)
            getCusBasicInfo(0)
                .then((response) => {
                    if (response.data) {
                        this.customer = response.data;
                    } else {
                        jumpInCurPage('/port');
                    }
                })
            getArtTypes()
                .then((response) => {
                    this.artTypes = response.data;
                })
                .then(() => {
                    getTinyArtOnePageByType('推荐', this.page.tinyPage, this.page.tinyPageSize)
                        .then( (response) => {
                            this.tinyArticles = response.data;
                        });
                    getHotArtOnePage(this.page.hotPage, this.page.hotPageSize)
                        .then( (response) => {
                            this.hotArticles = response.data;
                        });
                });
            window.scrollTo(0, 0);
        },
        methods: {
            /**
             * 如果选中的类别超过了 this.leftMenu.majorLength 的限制, 即属于二级类别,
             * 则调换 选中的类别 与 一级类别中最后一个类别 在数组中的位置.
             *
             * @param index 选中的类别下标
             */
            changeCurIndex: function (index) {
                if (index >= this.page.menuMajorLen) {
                    this.page.menuCurIndex = this.page.menuMajorLen - 1;
                    let median = this.artTypes[this.page.menuMajorLen - 1];
                    this.artTypes[this.page.menuMajorLen - 1] = this.artTypes[index];
                    this.artTypes[index] = median;
                } else {
                    this.page.menuCurIndex = index;
                }

                this.page.tinyPage = 0;
                    getTinyArtOnePageByType(this.artTypes[this.page.menuCurIndex], this.page.tinyPage, this.page.tinyPageSize)
                    .then((response) => {
                        this.tinyArticles = response.data;
                    });
                window.scrollTo(0,0);
            },

            /**
             * 刷新热点知识
             */
            refreshHot: function () {
                if (this.page.hotPage > 3) {
                    this.page.hotPage = 0;
                } else {
                    this.page.hotPage += 1;
                }
                getHotArtOnePage(this.page.hotPage, this.page.hotPageSize)
                    .then((response) => {
                        this.hotArticles = response.data;
                    })
                    .catch(() => {
                        this.$message.info("未能成功获取数据，请检查网络连接");
                    });
            },

            getMoreTinyArt: function () {
                let artHeight = document.getElementsByTagName('article')[0].offsetHeight;
                let innerHeight = window.innerHeight;
                let otherHeight = 70 + 15;
                let scrollHeight = artHeight - innerHeight + otherHeight;
                if (scrollHeight <= (document.documentElement.scrollTop + 5)) {
                    this.page.tinyPage += 1;
                    getTinyArtOnePageByType(this.artTypes[this.page.menuCurIndex], this.page.tinyPage, this.page.tinyPageSize)
                        .then( (response) => {
                            for (let i = 0; i < response.data.length; i++) {
                                this.tinyArticles.push(response.data[i]);
                            }
                        })
                }
            },

            /**
             * 跳转至文章页面
             * @param artId
             */
            jumpToArticle: function (artId) {
                // this.$router.push('/article/' + artId)
                jumpInNewPage('/article/' + artId);
            },

            /**
             * 跳转至作者用户页面
             * @param cusId
             */
            jumpToCustomer: function (cusId) {
                // this.$router.push('/self/' + cusId);
                jumpInNewPage('/self/' + cusId);
            }
        },
        data: function () {
            return {
                // 记录页面控制信息
                page: {
                    menuCurIndex: 0,
                    menuMajorLen: 8,
                    menuTip: '更多',
                    tinyPage: 0,
                    tinyPageSize: 9,
                    hotTitle: '大家都在看',
                    hotPage: 0,
                    hotPageSize: 5
                },
                artTypes: [ ],
                tinyArticles: [ ],
                hotArticles: [
                    { artId: '', artTitle: 'Loading......', artImageUrl: ''},
                ],
                customer: { }
            }
        }
    }
</script>


<style scoped src="../assets/css/Normal.css"></style>
<style scoped>
    /*.bottom-tip {*/
    /*    color: #888888;*/
    /*}*/
    .edit-entrance {
        margin-bottom: 10px;
    }
</style>