<template>
    <dark-card>
        <div :style="note">
            <!-- 用户信息的显示板 -->
            <div class="customer">
                <!-- 头像 -->
                <div class="customer-avatar"><img :src="customer.cusAvatarUrl"></div>
                <!-- 信息 -->
                <div class="customer-info">
                    <el-popconfirm title="确定要提交你的新用户名吗？">
                        <span slot="reference" class="customer-info-name">{{ customer.cusName }}</span>
                    </el-popconfirm>
                    <el-popconfirm title="确定要提交你的新签名吗？">
                        <span slot="reference" class="customer-info-style">{{ customer.cusStyle }}</span>
                    </el-popconfirm>
                    <el-button class="follow" type="primary" v-if="!isFollow"
                               :disabled="visitor.cusId === customer.cusId" @click="followCustomer">
                        +关注</el-button>
                    <el-button class="follow" type="success" v-if="isFollow"
                               :disabled="visitor.cusId === customer.cusId" @click="followCustomer">
                        取消关注</el-button>
                </div>
            </div>
        </div>
    </dark-card>
</template>

<script>
    import DarkCard from '../common/DarkCard'
    import { setCusFollow} from "../../control/Self";
    export default {
        name: "EditorMain",
        props: ['customer', 'visitor', 'isFollow'],
        components: { DarkCard },
        mounted: function() {

        },
        methods: {
            followCustomer: function () {
                setCusFollow(this.customer.cusId)
                    .then((response) => {
                        // alert(response.data);
                        if (response.data === '关注失败') {
                            this.isFollow = false;
                        } else {
                            this.isFollow = true;
                        }
                    })
            }
        },
        data: function () {
            return {
                // isFollow: false,
                note: {
                    height: '150px',
                    width: '100%',
                    position: 'relative',
                },
                modify: {
                    cusAvatarUrl: false,
                    cusName: false,
                    cusStyle: false
                }
            }
        }
    }
</script>

<style scoped>

    .customer-avatar {
        height: 150px;
        width: 150px;
        float: left;
        margin-right: 30px;
    }

    .customer-avatar img {
        width: 100%;
        cursor: pointer;
    }

    .customer-info {
        height: 100px;
        margin-top: 30px;
        float: left;
        text-align: left;
    }

    .customer-info-name {
        display: block;
        line-height: 45px;
        font-size: 30px;
        font-weight: 600;
        cursor: pointer;
    }

    .customer-info-style {
        display: block;
        font-size: 16px;
        line-height: 25px;
        cursor: pointer;
    }

    .el-button {
        height: 25px;
        width: 60px;
        padding: 0px;
        font-size: 10pt;
        border-radius: 1px;
        display: block;
        margin-top: 5px;
    }
</style>