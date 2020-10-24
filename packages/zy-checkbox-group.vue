<template>
<div class="zy-checkbox-group">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: "zyCheckboxGroup",
    props: {
        value: {
            type: Array
        }
    },
    provide() {
        return {
            CheckboxGroup: this
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
