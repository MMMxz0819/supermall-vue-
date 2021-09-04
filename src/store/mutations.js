export default{
    addCount(state, payload) {
        payload.count++

    },
    addToCart(state, payload) {
        payload.count = 1
        state.cartLists.push(payload)
    }
}