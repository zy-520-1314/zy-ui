<template>
<button :class="['zy-button',`zy-button--${type}`,{'is-plain':plain},{'is-round':round},{'is-circle':circle}]" @click="handleClick">
    <!--:class="[`zy-button--${type}`,{'is-plain':plain}]"-->
    <!--
    动态绑定类名方法有三种
    一种是对象的写法
    <button class="zy-button" :class="{'is-plain':plain}">
    index===currentIndex这个返回一个布尔值,如果是false则不加is-plain这个类名,如果为true则加
    <button class="zy-button" :class="{'is-plain':index===currentIndex}">
    一种是数组的写法
    <button :class="["zy-button",index===currentIndex？'className':'']">
    这样button会有至少一个类名,如果index===currentIndex那么就有两个类名,分别为zy-button和className
    还有一种是数组内部放对象的写法
    :class="[`zy-button--${type}`,{'is-plain':plain}]"
    -->
    <span>
        <slot></slot>
    </span>
</button>
</template>

<script>
export default {
    name: "zyButton",
    // 封装一个通用的组件,会对props做一个约束,props进行校验
    props: {
        // 属性为type属性
        type: {
            //数据类型为字符串类型
            type: String,
            // 如果app.vue文件里的zy-button标签没有写type属性
            // 如下的default属性就是默认值,如果不填type属性就用默认值"default"
            default: "default"
        },
        // plain属性如果传了就是true,如果不传就是false
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    // created() {
    //     // console.log(this.type)
    //     // console.log("插槽", this.$slots)
    //     // this.$slots可以访问所有的插槽,如果是具名插槽/命名插槽则用this.$slots.你命的名字
    // },
    components: {},

    methods: {
        handleClick(e) {
            //如果写this.$emit("XXX",e) 给插槽绑定一个点击事件,然后触发,<zy-button></zy-button>标签内部绑定的自定义事件并且传参
            //如果不写点击事件而是写自定义事件，你在<zy-button></zy-button>组件绑定点击事件就不会触发,所以在组件封装的时候我们要开放点击事件,所以我们就要触发点击事件
            this.$emit("click", e)
        }
    }
}
</script>

<style lang="scss" scoped>
.zy-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    // 禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}

// type按钮颜色的样式
.zy-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover,
    &:focus {
        background: #f78989;
        border-color: #f78989;
        color: #fff;
    }
}

.zy-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover,
    &:focus {
        background: #ebb563;
        border-color: #ebb563;
        color: #fff;
    }
}

.zy-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover,
    &:focus {
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #fff;
    }
}

.zy-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &:hover,
    &:focus {
        background: #85ce61;
        border-color: #85ce61;
        color: #fff;
    }
}

.zy-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover,
    &:focus {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
    }
}

// plain朴素按钮的样式
// .a.b{样式}这种写法表示标签同时有a和b两个class类名才可以拥有花括号内部的样式

.zy-button.is-plain {

    &:hover,
    &focus {
        background: #fff;
        border-color: #409eff;
        color: #409eff;
    }
}

.zy-button--primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;

    &:hover,
    &focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
    }
}

.zy-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;

    &:hover,
    &focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
    }
}

.zy-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;

    &:hover,
    &focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
    }
}

.zy-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;

    &:hover,
    &focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
    }
}

.zy-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;

    &:hover,
    &focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
    }
}

// 圆角的样式
.zy-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}

// 圆形的样式
.zy-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}
</style>
