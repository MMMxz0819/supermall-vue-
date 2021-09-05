import getters from "./getters"

export default {
    addCount(state, payload) {
        payload.count++

    },
    addToCart(state, payload) {
        payload.check = false
        payload.count = 1
        state.cartLists.push(payload)
    },
    cancelAll(state, payload) {
        state.cartLists.forEach(item => item.check = false)
    },
    chooseAll(state,payload){
        state.cartLists.forEach(item => item.check = true)
    }
}