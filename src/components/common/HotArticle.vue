<template>
    <dark-card>
        <div class="hot-art-header clear-float">
            <span class="header-title">{{ title }}</span>
            <el-button class="header-refresh" type="text" @click="refreshArticles">刷新</el-button>
        </div>
        <div class="hot-art-box">
            <div class="hot-art-body clear-float" v-for="( hotArticle, i ) in hotArticles" :key="i">
                <img class="body-image" v-if="hotArticle.artImageUrl !== ''" :src="hotArticle.artImageUrl"/>
                <el-tooltip class="item" effect="dark" :content="hotArticle.artTitle">
                    <span class="body-title" :class="[ hotArticle.artImageUrl !== '' ? narrowTitle : wideTitle ]"
                        @click="jumpToArticle( hotArticle.artId )">
                        {{ hotArticle.artTitle }}
                    </span>
                </el-tooltip>
            </div>
        </div>
    </dark-card>
</template>

<script>
import DarkCard from "./DarkCard";

export default {
    components: { DarkCard },
    props: ['title', 'hotArticles'],
    name: 'HotArticle',
    computed: {
    },
    methods: {
        jumpToArticle: function (artId) {
            this.$emit('jump', artId);
        },
        refreshArticles: function () {
            this.$emit('refresh');
        },
    },
    data: function() {
        return {
            narrowTitle: 'narrow-title',
            wideTitle: 'wide-title'

        }
    }
}
</script>

<style scoped>
    .hot-art-header {
        border-bottom: solid 1px #ebeef5;
        margin-bottom: 15px;
    }

    .header-title {
        font-size: 20px;
        font-weight: 800;
        height:40px;
        line-height: 40px;
        float: left;
    }

    /* 刷新按钮 */
    .header-refresh {
        height: 40px;
        float: right;
    }

    /* 刷新 两个字 */
    .header-refresh span {
        font-size: 16px;
        font-weight: 500;
    }
    .hot-art-box {
        
    }
    .hot-art-body {
        margin-bottom: 10px;
    }

    .body-image {
        float: left;
        height: 50px;
        width: 27%;
        margin-right: 3%;
    }

    /* 标题 */
    .body-title {
        float: left;
        line-height: 25px;
        font-weight: 500;
        overflow: hidden;
        height: 50px;
        text-align: left;
        font-size: 15px;
    }

    .narrow-title {
        width: 70%;
    }

    .wide-title {
        width: 100%;
    }

    .body-title:hover {
        color: #02abe9d1;
        cursor: pointer;
    }

</style>
