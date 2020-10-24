<template>
<div>
    sync-----{{money}}
    <button @click="hanshu">修改</button>
</div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        money: null
    },
    data() {
        return {}
    },

    components: {},

    methods: {
        hanshu() {
            // 如果父组件写了修饰符sync,那么在子组件如果想改变修饰符sync修饰的父组件属性,那么就在子组件里触发一个函数
            // 吧并且在函数内部写this.$emit方法("update:参数1","参数2") 参数一是你在父组件中sync修饰的属性名,参数二是你要把父组件中sync修饰符修饰的属性改为什么值
            this.$emit("update:visible", true)
            this.$emit("update:money", 888)
        }
    }
}
</script>

<style scoped>
</style>
