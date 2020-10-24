<template>
<div class="zy-switch" :class="{'is-checked':value}" @click="handleClick">

    <span class="zy-switch__core" ref="core">
        <span class="zy-switch__button"></span>
    </span>
    <input class="zy-switch__input" type="checkbox" :name="name" ref="input">
</div>
</template>

<script>
export default {
    name: "zySwitch",
    props: {
        name: {
            type: String,
            default: ""
        },
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: ""
        },
        inactiveColor: {
            type: String,
            default: ""
        }
    },
    data() {
        return {}
    },

    components: {},

    methods: {
        handleClick() {
            var self = this
            this.$emit("input", !this.value)
            // 如果不用监听去做
            // 如果在后面这样写直接调用
            // 会有一个坑,因为触发父组件的input事件并且取反赋值这个过程是异步的所以当取反赋值还
            // 没有赋值给value就已经调用了this.setColor()所以会出现一个bug就是第一次点击事件handleClick触发的时候
            // 为激活状态但是仍然不会显示到激活状态的颜色而是失活的颜色
            // 这种bug其实很好处理
            // 就是用this.$nextTick(() => {this.setColor()});去代替直接写this.setColor(),
            // 意思就是要等到数据更新后(value的值更新后)在执行this.setColor()
            this.$nextTick(() => {
                this.setColor()
                self.$refs.input.checked = this.value
            });

            // 其实这种方案解决这个bug会比较的麻烦
            // 我们可以直接使用watch监听去监听value值的改变, 如果改变了我们就调用this.setColor()
        },
        setColor() {
            // 修改开关的颜色
            if (this.activeColor || this.inactiveColor) {
                // 如果value为false,即初始状态为失活状态,那么我们就用失活状态的样式
                // 反之如果value为true,即为激活状态，那么我们就用激活状态的样式
                var color = this.value ? this.activeColor : this.inactiveColor
                this.$refs.core.style.borderColor = color
                this.$refs.core.style.backgroundColor = color
            }
        }
    },
    mounted() {
        // 进来触发修改颜色的函数
        this.setColor()
        // 控制checkbox 的checkbox
        this.$refs.input.checked = this.value
    },
    watch: {
        value() {
            this.setColor()
        }
    }
}
</script>

<style lang="scss">
.zy-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;

    .zy-switch__input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
    }

    .zy-switch__core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border-radius: 10px;
        border: 1px solid #dcdfe6;
        outline: none;
        box-sizing: border-box;
        background-color: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s, background-color .3s;
        vertical-align: middle;

        .zy-switch__button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all 0.3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
}

.zy-switch.is-checked {
    .zy-switch__core {
        border-color: #409eff;
        background-color: #409eff;

        .zy-switch__button {
            transform: translateX(20px);
        }
    }
}
</style>
