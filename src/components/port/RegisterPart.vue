<template>
    <div>
        <h1>注册BrainyBites账号</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="创建用户名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="USERNAME"></el-input>
            </el-form-item>
            <el-form-item label="创建密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="PASSWORD"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="PASSWORD REPEATED"></el-input>
            </el-form-item>
            <div>
                <Vcode :show="captcha.isShow" @success="onSuccess" @close="onClose" />
            </div>
            <el-form-item>
                <el-button v-if="!captcha.isAccess" type="primary" @click="captcha.isShow = true">开始验证</el-button>
                <el-button v-if="captcha.isAccess" type="primary" @click="cusRegister()">注册</el-button>
                <el-button @click="cusLogin()">有账号了, 去登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { cusRegister } from "../../control/Self";
    import Vcode from "vue-puzzle-vcode";

    export default {
        name: "RegisterPart.vue",
        components: { Vcode },
        methods: {
            cusRegister: function() {
                if (this.ruleForm.pass !== this.ruleForm.checkPass) {
                    return;
                }
                cusRegister(this.ruleForm.name, this.ruleForm.pass)
                    .then((response) => {
                        if (response.data === '注册成功') {
                            this.$message.info(response.data);
                            this.$emit('changePanel');
                        } else {
                            this.$message.info(response.data);
                            this.ruleForm.name = '';
                            this.ruleForm.pass = '';
                            this.ruleForm.checkPass = '';
                        }
                    })
            },
            cusLogin: function () {
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
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    name: '',
                    pass: '',
                    checkPass: ''
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
                    checkPass: [
                        {
                            required: true,
                            validator: validatePass2,
                            trigger: 'blur'
                        }
                    ]
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