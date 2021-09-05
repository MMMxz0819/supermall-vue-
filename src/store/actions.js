export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            // 查找原先列表中是否有该商品
            let OldProduct = context.state.cartLists.find(item => item.iid === payload.iid)

            if (OldProduct) {//若存在则直接变量+1
                context.commit('addCount', OldProduct)
                resolve('商品数量+1')

            } else { //如果没有就增加计数属性
                context.commit('addToCart', payload)
                resolve('成功添加商品至购物车')
            }
        })


    }
}