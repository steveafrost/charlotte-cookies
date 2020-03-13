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
  async getProducts ({ commit, $axios }) {
    const { data } = await $axios.$get(
      'https://connect.squareup.com/v2/catalog/list'
    )

    commit('setProducts', data)
  }
}
