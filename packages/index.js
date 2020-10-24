import Button from "./zy-button.vue"
import Dialog from "./zy-dialog.vue"
import Input from "./zy-input.vue"
import Checkbox from "./zy-checkbox.vue"
import Radio from "./zy-radio.vue"
import RadioGroup from "./zy-RarioGroup.vue"
import Switch from "./zy-switch.vue"
import CheckboxGroup  from "./zy-checkbox-group.vue"

// 存储组件列表
var components=[
    Button,
    Dialog,
    Input,
    Checkbox,
    Radio,
    RadioGroup,
    Switch,
    CheckboxGroup
]

// 整个包的入口
const install=function(Vue){
    // 遍历注册全局组件
    components.forEach((item)=>{
        Vue.component(item.name,item)
    })
}

// 判断是否是直接引入文件,如果是,就不用调用Vue.use()
if(typeof window !== 'undefined'&&window.Vue){
    install(window.Vue)
}

export default {install}