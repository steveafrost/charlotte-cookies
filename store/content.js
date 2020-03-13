export const state = () => ({
  products: []
})

export const mutations = {
  setProducts (state, products) {
    state.products = products
  },
  emptyProducts (state) {
    state.products = []
  }
}

export const actions = {
  async getProducts ({ commit }) {
    const { data } = await this.$axios.get(
      'https://connect.squareup.com/v2/catalog/list'
    )

    commit('setProducts', data)
  }
}
