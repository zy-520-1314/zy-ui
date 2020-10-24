<template>
<!--zy-dialog__wrapper是我们对话框的遮罩
click事件有个修饰符click.self表示点击的如果是自己本身才触发这个函数,即是通过事件冒泡的形式的点击不会触发这个时间
-->
<!--transition标签可以用来做动画 name属性如果设置了就在下面样式里要用.➕你设置的name去写样式-->
<transition name="dialog-fade">
    <div class="zy-dialog__wrapper" v-show="visible" @click.self="handleClose()">
        <div class="zy-dialog" :style="{width:width,marginTop:top}">
            <div class="zy-dialog__header">
                <!--给一个具名插槽去确定左上角的提示提示信息-->
                <slot name="title">
                    <span class="zy-dialog__title">{{title}}</span>
                </slot>
                <button class="zy-dialog__headerbtn" @click="handleClose()">
                    <i class="zy-icon-close">×</i>
                </button>
            </div>
            <div class="zy-dialog__body">
                <!--默认插槽→用来写中间部分的内容-->
                <slot>
                    <span>这儿填写内容</span>
                </slot>
            </div>
            <!--$slots.footer配合v-if通过具名插槽去判断,$slots.footer是判断是否有写插槽如果写了那就是true,如果没写就是false-->
            <div class="zy-dialog__footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: "zyDialog",
    props: {
        // 属性为title属性
        title: {
            type: String,
            default: "提示"
        },
        width: {
            type: String,
            default: "50%"
        },
        top: {
            type: String,
            default: "15vh"
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },

    components: {},

    methods: {
        handleClose() {
            // 点遮罩让dialog消失方案一是通过$emit方法去传参触发父组件的事件让其隐藏
            // 方案二是通过this.$parent.visible去控制父组件的布尔值的改变
            // this.$emit("close", false)
            // 瓤子租金的visible变成false
            // this.$parent.visible = false
            this.$emit("update:visible", false)
        }
    }
}
</script>

<!--加了scope表示样式只用在内部组件上,注意一般封装UI组件库的时候style都是不加scope因为
外部通过插槽引进来的标签或者组件通常都是需要加样式控制组件或插槽标签的位置的
如果我们加了scope的话在内部无法设置样式给外部引入的组件或者插槽
如果加了scope还要给组件外部引进来的组件设置样式,那么要使用深度选择器scss中就要在写样式前加上::v-deep
例如
::v-deep .zy-button:first-child{
    margin-right:20px
}

在less当中深度选择器是   /deep/ 
如果你写的是纯css那么深度选择器是  >>>
-->

<style lang="scss">
// 引入的动画fade 表示引入动画→从0%到100%
.dialog-fade-enter-active {
    animation: fade 0.4s;
}

//引入的动画fade reverse表示反转动画 表示引入动画→从100%到0%
.dialog-fade-leave-active {
    animation: fade 0.4s reverse;
}

// 下面代码是定义一个动画,名叫fade
@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

.zy-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);

    .zy-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 30%;

        &__header {
            padding: 20px 20px 10px;

            .zy-dialog__title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }

            .zy-dialog__headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;

                .el-icon-close {
                    color: #909399;
                }
            }
        }

        &__body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }

        &__footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;

            .zy-button:first-child {
                margin-right: 20px;
            }
        }
    }
}
</style>
