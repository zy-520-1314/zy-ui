<template>
<!--is-checked-->
<label class="zy-radio" :class="{'is-checked':label==model}">
    <span class="zy-radio__input">
        <span class="zy-radio__inner"></span>
        <input type="radio" class="zy-radio__original" :value="label" :name="name" v-model="model">
    </span>
    <span class="zy-radio__label">
        <slot></slot>
        <!--如果没有穿插槽内容进来,我们就把label当成内容-->
        <template v-if="!$slots.default">{{label}}</template>
    </span>
</label>
</template>

<script>
export default {
    name: "zyRadio",
    inject: {
        // RadioGroup以对象的形式接收的话可以设置默认值,就是如果父组件
        // 在不传递RadioGroup的时候就默认为空字符串
        RadioGroup: {
            default: ""
        }
    },
    // 需要提供一個计算属性 model
    computed: {
        model: {
            get() {
                // this.RadioGroup.value
                return this.isGroup ? this.RadioGroup.value : this.value
            },
            set(value) {
                // 触发父组件给当前组件注册的input事件
                //如果不点击选中单选框那么单选框的的默认value值就是为label值为一的
                // 但是如果我们选中了单选框就会触发父组件上的input事件,并且把label传给父组件上的gender参数并赋值,通过改变gender的值来控制高亮
                this.$emit("input", value)
                this.isGroup ? this.RadioGroup.$emit("input", value) : this.$emit("input", value)
            }
        },
        isGroup() {
            // 用于判断radio是否被radioGroup所包裹
            // !!this.RadioGroup的返回值是一个布尔值
            return !!this.RadioGroup
        }
    },
    props: {
        label: {
            type: [String, Number, Boolean],
            default: ""
        },
        value: null,
        name: {
            type: String,
            default: ""
        }
    },
    data() {
        return {}
    },

    components: {},

    methods: {}
}
</script>

<style lang="scss">
.zy-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    .zy-radio__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;

        .zy-radio__inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;

            &:after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform .15s ease-in;
            }
        }

        .zy-radio__original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0px;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }

    .zy-radio__label {
        font-size: 14px;
        padding-left: 10px;
    }
}

.zy-radio.is-checked {
    .zy-radio__input {
        .zy-radio__inner {
            border-color: #409eff;
            background: #409eff;

            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }

    .zy-radio__label {
        color: #409eff;
    }
}
</style>
