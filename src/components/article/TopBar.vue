<template>
    <div class="clear-float">
        <div class="body-image" v-on:click="jumpToIndex">
            <img src="@/assets/image/Logo.png"/>
        </div>
        <search-panel :tip="tip"  v-on:search="searchArticles"></search-panel>
        <div class="manage">
            <img v-if="loginState" :src="customer.cusAvatarUrl"  v-on:click="jumpToSelf"/>
            <el-button v-if="loginState" type="text" @click="loginOut">退出登录</el-button>
            <img v-if="!loginState" :src="ImgSrc"  v-on:click="jumpToSelf"/>
            <el-button v-if="!loginState" type="text" @click="loginIn">登录</el-button>
        </div>
    </div>
</template>

<script>
    import SearchPanel from '../common/SearchPanel'
    import SampleImg from '../../assets/image/Sample.png'
    import { jumpInCurPage, jumpInNewPage } from "../../util/PageJump";
    import { quitLogin } from "../../control/Self";

    export default {
        name: 'TopBar',
        props: ['message', 'customer'],
        components: {SearchPanel},
        computed: {
            loginState() {
                if(JSON.stringify(this.customer) === '{}') {
                    return false
                }else {
                    return true
                }
            }
        },
        methods: {
            jumpToIndex: function() {
                jumpInCurPage('/');
            },
            jumpToSelf: function() {
                if(this.loginState) {
                    jumpInNewPage('/self/' + this.customer.cusId)
                }
            },
            searchArticles: function (message) {
                jumpInNewPage('/search/' + message )
                // searchContentByKeyAndTagTypePage(message, 'global', 'test', 0, 10)
            },
            loginOut: function () {
                quitLogin()
                    .then((response) => {
                        if (response.data === '退出成功') {
                            this.$router.push({path: '/port'});
                        }
                    })
            },
            loginIn: function () {
                jumpInNewPage('/port/')
            }
        },
        data: function() {
            return {
                tip: '搜索',
                ImgSrc: SampleImg,
            }
        }
    }
</script>

<style scoped>


    .body-image {
        float: left;
        height: 40px;
    }

    .body-image img {
        height: 35px;
        width: 128px;
        cursor: pointer;
    }

    .manage {
        float: right;
        height: 40px;
        padding-top: 5px;
    }

    .manage >>> .el-button {
        font-size: 16px;
        height: 40px;
        float: right;
    }

    .manage img {
        width: 30px;
        height: 30px;
        /*padding: 5px 10px;*/
        margin-right: 5px;
        cursor: pointer;
    }

</style>
