<template>
    <div>
        <header>
            <top-bar class="top-bar" :customer="customer"></top-bar>
        </header>
        <main>
            <h2 class="title">编辑你的创作</h2>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item class="title-panel">
                    <el-col :span="16">
                        <el-form-item label="标题">
                            <el-input v-model="form.name" placeholder="标题不可为空"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="文章类别">
                            <el-select v-model="form.type" placeholder="文章类别">
                                <el-option label="Apple" value="Apple"></el-option>
                                <el-option label="快讯" value="快讯"></el-option>
                                <el-option label="评测" value="评测"></el-option>
                                <el-option label="技巧" value="技巧"></el-option>
                                <el-option label="观点" value="观点"></el-option>
                                <el-option label="游戏" value="游戏"></el-option>

                                <el-option label="应用" value="应用"></el-option>
                                <el-option label="公司" value="公司"></el-option>
                                <el-option label="地理" value="地理"></el-option>
                                <el-option label="历史" value="历史"></el-option>
                                <el-option label="杂谈" value="杂谈"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-form-item>

                <el-form-item class="edit-panel">
                    <div ref="toolbar" class="toolbar"></div>
                    <div ref="textplace" class="textplace"></div>
                </el-form-item>

                <el-form-item class="switch-panel">
                    <el-switch
                        v-model="form.isAnon"
                        active-text="匿名"
                        inactive-text="不匿名">
                    </el-switch>
                    <el-switch
                        v-model="form.cannotRep"
                        active-text="不允许转载"
                        inactive-text="允许转载">
                    </el-switch>
                    <el-switch
                        v-model="form.cannotCom"
                        active-text="不允许评论"
                        inactive-text="允许评论">
                    </el-switch>
                </el-form-item>
                
                <el-form-item class="buttom-panel">
                    <el-button type="primary" @click="onSubmit">发布创作</el-button>
                    <el-button @click="cancelCreate">取消</el-button>
                </el-form-item>
            </el-form>
        </main>
    </div>
</template>




<script>
    import TopBar from "../components/edit/TopBar";
    import { getCusBasicInfo } from "../control/Self";
    import { jumpInCurPage } from "../util/PageJump";
    import WangEditor from 'wangeditor'
    import { addNewArt } from "../control/Edit";
    export default {
        name: "EditView.vue",
        components: { TopBar },
        mounted: function() {
            getCusBasicInfo(0)
                .then((response) => {
                    if (response.data) {
                        this.customer = response.data;
                    } else {
                        // this.$router.push({path: '/port'});
                        jumpInCurPage('/port');
                    }
                });

            let editor = new WangEditor(this.$refs.toolbar, this.$refs.textplace);
            this.editor = editor;
            editor.customConfig.onchange = (html) => {
                this.message = html;
            };
            editor.customConfig.menus = this.menus;
            editor.create();

            window.scrollTo(0, 0);
        },
        methods: {
            onSubmit() {
                // this.$message.info(this.message);
                let article = {
                    artTitle: this.form.name,
                    artContent: this.message,
                    artCusId: this.customer.cusId,
                    artType: this.form.type,
                    artImageUrl: ''
                };
                addNewArt(article)
                    .then(
                        (response) => {
                            if (response.data !== 0) {
                                this.$message.info("文章添加成功");
                                jumpInCurPage('/article/' + response.data)
                            } else {
                                this.$message.info("文章添加失败");
                            }
                        }
                    )
            },
            cancelCreate: function () {
                jumpInCurPage('/index')
            }
        },
        data: function () {
            return {
                customer: {

                },
                message: '',
                menus: [
                    'head',  // 标题
                    'bold',  // 粗体
                    'fontSize',  // 字号
                    'fontName',  // 字体
                    'italic',  // 斜体
                    'underline',  // 下划线
                    'strikeThrough',  // 删除线
                    'foreColor',  // 文字颜色
                    // 'backColor',  // 背景颜色
                    'link',  // 插入链接
                    'list',  // 列表
                    'justify',  // 对齐方式
                    // 'quote',  // 引用
                    'emoticon',  // 表情
                    'image',  // 插入图片
                    'table',  // 表格
                    // 'video',  // 插入视频
                    'code',  // 插入代码
                    'undo',  // 撤销
                    'redo'  // 重复
                ],
                form: {
                    name: '',
                    type: '',
                    isAnon: false,
                    cannotRep: false,
                    cannotCom: false
                }
            }
        }
    }
</script>


<style scoped src="../assets/css/Narrow.css"></style>
<style scoped>
    .title {
        display: flex;
        justify-content: center;
        padding-top: 25px;
        padding-bottom: 10px;
    }

    .toolbar {
        height: 50px;
        border: 0 solid #f1f1f1;
        background-color:#f1f1f1;
        position: relative;
    }

    .textplace {
        height: 600px;
        border: 1px solid #f1f1f1;
        text-align: left;
        margin-bottom: 40px;
        /*overflow: hidden;*/
    }

    .textplace >>> .w-e-text {
        padding: 5px 10px;
    }

    .textplace >>> .w-e-text p {
        margin: 0;
        line-height: 20px;
    }

    /*.title-panel.el-form-item >>> .el-form-item__content {*/
    /*    margin-left: 20px !important;*/
    /*}*/

    .edit-panel.el-form-item >>> .el-form-item__content {
        margin: 0 !important;
    }

    .switch-panel.el-form-item >>> .el-form-item__content {
        display: flex;
        justify-content: space-around;
        margin: 0 !important;
    }

    .buttom-panel.el-form-item >>> .el-form-item__content {
        margin: 0 !important;
    }


</style>