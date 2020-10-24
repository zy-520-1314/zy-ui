<template>
<div class="zy-input">
    <input :disabled="disabled" :type="type" :name="name" :class="['zy-input__inner',{'is-disabled':disabled}]" :placeholder="placeholder" :value="value" @input="handleInput">
    <!--注意给input标签写v-modle="user"指令就相当于给标签写了:value=value并且给input标签绑定了一个@input事件并且@input="user=$emit.target.value"-->
    <!--如上的@input="user=$emit.target.value",是因为我们v-modle="user"双向绑定的user,如果双向绑定是a那么就是@input="a=$emit.target.value"-->
    <!--因为组件的外部用到了,v-modle即等价于:value=value 和@input="x=$emit.target.value" 所以我们需要在封装的组件内部给一个单项绑定value值,也就是<zy-input>标签传过来的value
    因为<zy-input></zy-input>还有一个input事件所以我们也要在封装的组件内部写一个input事件去触发<zy-input></zy-input>上的input事件
    -->
</div>
</template>

<script>
export default {
    name: "zyInput",
    props: {
        placeholder: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "text"
        },
        name: {
            type: String,
            default: ""
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ""
        }
    },
    data() {
        return {}
    },

    components: {},

    methods: {
        handleInput(e) {
            this.$emit("input", e.target.value)
        }
    }
}
</script>

<style lang="scss">
.zy-input {
    position: relative;
    font-size: 14px;
    display: inline-block;

    .zy-input__inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0px 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        width: 100%;

        &:focus {
            outline: none;
            border-color: #409eff;
        }

        &.is-disabled {
            background-color: #f5f7fa;
            color: #c0c4cc;
            cursor: not-allowed;
        }

    }
}
</style>
