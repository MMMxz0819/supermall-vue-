import Toast from './toast.vue'

const plugin = {}

plugin.install = (Vue) => {

    // 1.创建组件构造器
    const ToastConstructor = Vue.extend(Toast)

    // 2.将创建出来的组件,挂载到某个div中
    const toast = new ToastConstructor
    toast.$mount(document.createElement('div'))

    // 3.将元素增加到页面中
    document.body.appendChild(toast.$el)

    //4.增加原型函数
    Vue.prototype.$toast = toast
}

export default plugin