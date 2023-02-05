<template>
    <div>
        <h1>登录BrainyBites账号</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="USERNAME"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="PASSWORD"></el-input>
            </el-form-item>
            <div>
                <Vcode :show="captcha.isShow" @success="onSuccess" @close="onClose" />
            </div>
            <el-form-item>
                <el-button v-if="!captcha.isAccess" type="primary" @click="captcha.isShow = true">开始验证</el-button>
                <el-button v-if="captcha.isAccess" type="primary" @click="cusLogin()">登录</el-button>
                <el-button @click="cusRegister()">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { cusLogin } from "../../control/Self";
    import { jumpInCurPage } from "../../util/PageJump";
    import Vcode from "vue-puzzle-vcode";

    export default {
        name: "LoginPart.vue",
        components: { Vcode },
        methods: {
            cusLogin() {
                cusLogin(this.ruleForm.name, this.ruleForm.pass)
                    .then((response) => {
                        if (response.data === '登录成功' || response.data === '您已登录') {
                            this.$message.info(response.data);
                            jumpInCurPage('/index')
                        } else if (response.data === '登录失败') {
                            this.$message.info(response.data);
                            this.ruleForm.name = '';
                            this.ruleForm.pass = '';
                        }
                    })
            },
            cusRegister() {
                this.$emit('changePanel');
            },
            onSuccess() {
                this.captcha.isShow = false;
                this.captcha.isAccess = true;
            },
            onClose() {
                this.captcha.isShow = false;
                this.captcha.isAccess = false;
            }
        },
        data: function () {
            let validateName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback();
                }
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    name: '',
                    pass: '',
                },
                rules: {
                    name: [
                        {
                            required: true,
                            validator: validateName,
                            trigger: 'blur'
                        }
                    ],
                    pass: [
                        {
                            required: true,
                            validator: validatePass,
                            trigger: 'blur'
                        }
                    ],
                },
                captcha: {
                    isShow: false,
                    isAccess: false
                }
            };
        },


    }
</script>

<style scoped>
    h1 {
        margin-left: 100px;
    }
</style>