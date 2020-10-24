<template>
<div class="zy-radio-group">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: "zyRadioGroup",
    props: {
        //接收到了value值
        // 将来还需要触发 当前组件的input事件
        // 在vue当中用provide与inject 来实现祖先组件向其所有子孙后代组件注入一个依赖,
        // 不论组件层次多深,并且在其上下游关系成立的时间里始终生效.
        // 而在react当中用provider和consumer来实现子孙组件之间的传递
        value: null
    },
    provide() {
        return {
            RadioGroup: this
        }
    },
    data() {
        return {}
    },

    components: {},

    methods: {}
}
</script>

<style scoped>
</style>
