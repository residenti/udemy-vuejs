import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    count: 2,
    message: ''
  },

  // データ(state)の変更を行う処理は必ず mutations に定義する.
  mutations: {
    increment(state, number) {
      state.count += number
    },
    decrement(state, number) {
      state.count -= number
    },
    updateMessage(state, newMessage) {
      state.message = newMessage
    }
  },

  // mutations とは異なり非同期な処理が可能.
  //
  // コンポーネントから state を変更する方法として次の2通りがある.
  // ・commit して mutation を呼び出す
  // ・dispatch して action を呼び出す
  // どちらを使っても良いが、どちらかに統一するべき.
  actions: {
    // { commit } は ES6 の書き方で、context の内利用するもののみを指定できる.
    // こちらの方が処理が追いやすいのでおすすめ.
    increment({ commit }, number) {
      commit('increment', number)
    },
    decrement({ commit }, number) {
      commit('decrement', number)
    },
    updateMessage({ commit }, newMessage) {
      commit('updateMessage', newMessage)
    }
  },

  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
    message: state => state.message
  }

})
