<template>
    <div class="port">
        <img src="@/assets/image/Boy.svg"/>
        <div class="port-isolation"></div>
        <login-part v-if="page.loginShow" class="login-part" v-on:changePanel="changePanel"></login-part>
        <register-part v-if="!page.loginShow" class="register-part" v-on:changePanel="changePanel"></register-part>
    </div>
</template>

<script>
    import LoginPart from '../components/port/LoginPart'
    import RegisterPart from '../components/port/RegisterPart'

    export default {
        name: "PortView.vue",
        components: { RegisterPart, LoginPart },
        methods: {
            changePanel: function () {
                if (this.page.loginShow) {
                    this.page.loginShow = false;
                } else {
                    this.page.loginShow = true;
                }
            }
        },
        data: function () {
            return {
                page: {
                    loginShow: true
                }
            }
        }
    }
</script>

<style scoped src="../assets/css/Normal.css"></style>
<style scoped>
    .port {
        position: relative;
        display: flex;
        padding-top: 170px;
        width: 100%;
        min-width: 952px;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    .port img{
        height: 360px;
        width: 360px;
    }
    .port-isolation {
        display: inline-block;
        width: 0.7px;
        height: 370px;
        background-color: #999;
        margin-left: 18px;
        margin-right: 12px;
    }
    .login-part, .register-part {
        width: 450px;
    }

</style>