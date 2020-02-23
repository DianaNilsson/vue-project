import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeProducts: null,
    storeAnalytes: null,
    email: ''

  },
  mutations: {
    setProducts(state, storeProducts) {
      state.storeProducts = storeProducts
    },
    setAnalytes(state, storeAnalytes) {
      state.storeAnalytes = storeAnalytes
    },
    updateEmail(state, email) {
      state.email = email
    }
  },
  actions: {
    fetchStoreProducts({
      commit
    }) {
      fetch('http://www7.slv.se/pestapi/produkter')
        .then(response => response.json())
        .then(result => {
          commit('setProducts', result)
        })
    },
    fetchStoreAnalytes({
      commit
    }) {
      fetch('http://www7.slv.se/pestapi/analyter')
        .then(response => response.json())
        .then(result => {
          commit('setAnalytes', result)
        })
    }
  }
})