import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    count: 2
  },

  // データ(state)の変更を行う処理は必ず mutations に定義する.
  mutations: {
    increment(state, number) {
      state.count += number
    },
    decrement(state, number) {
      state.count -= number
    }
  },

  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3
  }

})
