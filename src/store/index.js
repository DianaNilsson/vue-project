import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeProducts: null,
    storeAnalytes: null
  },
  mutations: {},
  actions: {
    fetchStoreProducts() {
      fetch("http://www7.slv.se/pestapi/produkter")
    }
  },
  modules: {}
})