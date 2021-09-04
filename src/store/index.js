import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartLists: []
    },
    mutations: { //尽可能完成事情比较单一，判断逻辑放到action里面
        addCount(state, payload) {
            payload.count++

        },
        addToCart(state, payload) {
            payload.count = 1
            state.cartLists.push(payload)
        }
    },

    actions: {
        addCart(context, payload) {
            // 查找原先列表中是否有该商品
            let OldProduct = context.state.cartLists.find(item => item.iid === payload.iid)

            if (OldProduct) {//若存在则直接变量+1
                context.commit('addCount', OldProduct)


            } else { //如果没有就增加计数属性
                context.commit('addToCart', payload)
            }
        }
    },
})

export default store